// api/feedback.js
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, category, message, attachments, subject: customSubject } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const ticketId = `TICK-${Date.now().toString().slice(-6)}`;
    const recipientEmail = process.env.FEEDBACK_RECEIVER_EMAIL || 'alwayson@haggai.com';
    const emailSubject = customSubject || `[${category || 'Feedback'}] Ticket #${ticketId} from ${name}`;

    // Prepare attachments if provided
    let mailAttachments = [];
    if (Array.isArray(attachments) && attachments.length > 0) {
        mailAttachments = attachments.map(att => ({
            filename: att.filename || 'attachment',
            content: Buffer.from(att.content, 'base64'),
        }));
    }

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="margin-top: 0; color: #0f172a;">New ${category || 'Support'} Inquiry (${ticketId})</h2>
        <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <p><strong>Category:</strong> <span style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">${category || 'General'}</span></p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p><strong>Message / Request Details:</strong></p>
        <div style="background-color: #f8fafc; padding: 12px; border-left: 4px solid #b91c1c; border-radius: 4px; line-height: 1.6; white-space: pre-wrap;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
        ${mailAttachments.length > 0 ? `
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Attached Documents (${mailAttachments.length}):</strong></p>
          <ul style="color: #334155; font-size: 13px; margin: 0; padding-left: 20px;">
            ${mailAttachments.map(a => `<li>📄 ${a.filename}</li>`).join('')}
          </ul>
        ` : ''}
        <p style="font-size: 12px; color: #64748b; margin-top: 20px;">
          <em>💡 Replying directly to this email will respond to ${email}.</em>
        </p>
      </div>
    `;

    // 1. If SMTP credentials are configured, send via SMTP
    const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    if (hasSmtp) {
        try {
            const port = Number(process.env.SMTP_PORT) || 587;
            const isSecure = process.env.SMTP_SECURE !== undefined 
                ? process.env.SMTP_SECURE === 'true' 
                : port === 465;

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port,
                secure: isSecure,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
                tls: {
                    rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
                },
            });

            const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_FROM || `"Haggai Bank Portal" <${process.env.SMTP_USER}>`;

            const info = await transporter.sendMail({
                from: fromAddress,
                to: recipientEmail,
                replyTo: email,
                subject: emailSubject,
                html: emailHtml,
                attachments: mailAttachments,
            });

            return res.status(200).json({ success: true, ticketId, provider: 'smtp', messageId: info.messageId });
        } catch (err) {
            console.error('SMTP sending error:', err);
            return res.status(500).json({ success: false, error: `SMTP Error: ${err.message}` });
        }
    }

    // 2. Fall back to Resend if RESEND_API_KEY is available (useful during staging / dev while waiting for client credentials)
    if (process.env.RESEND_API_KEY) {
        try {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const fromAddress = process.env.EMAIL_FROM || 'Feedback Desk <onboarding@resend.dev>';

            const { data, error } = await resend.emails.send({
                from: fromAddress,
                to: [recipientEmail],
                reply_to: email,
                subject: emailSubject,
                html: emailHtml,
                ...(mailAttachments.length > 0 ? { attachments: mailAttachments } : {}),
            });

            if (error) {
                console.error('Resend error:', error);
                return res.status(400).json({ success: false, error });
            }

            return res.status(200).json({ success: true, ticketId, provider: 'resend', data });
        } catch (err) {
            console.error('API feedback error:', err);
            return res.status(500).json({ success: false, error: err.message });
        }
    }

    return res.status(500).json({
        success: false,
        error: 'Missing mailing configuration. Please configure SMTP environment variables (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) in your environment.'
    });
}