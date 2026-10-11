// api/feedback.js
import { Resend } from 'resend';

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

    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ success: false, error: "Missing RESEND_API_KEY environment variable locally or in your Vercel project configuration." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const ticketId = `TICK-${Date.now().toString().slice(-6)}`;

    // Prepare attachments for Resend if provided
    let resendAttachments = [];
    if (Array.isArray(attachments) && attachments.length > 0) {
        resendAttachments = attachments.map(att => ({
            filename: att.filename || 'attachment',
            content: Buffer.from(att.content, 'base64'),
        }));
    }

    try {
        const { data, error } = await resend.emails.send({
            // Testing address provided by Resend or verified domain sender
            from: process.env.EMAIL_FROM || 'Feedback Desk <onboarding@resend.dev>',

            // Where customer service receives it
            to: [process.env.FEEDBACK_RECEIVER_EMAIL || 'delivered@resend.dev'],

            // Makes clicking "Reply" go directly to the submitting user
            reply_to: email,

            subject: customSubject || `[${category || 'Feedback'}] Ticket #${ticketId} from ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="margin-top: 0; color: #0f172a;">New ${category || 'Support'} Inquiry (${ticketId})</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Category:</strong> <span style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">${category || 'General'}</span></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Message / Request Details:</strong></p>
          <div style="background-color: #f8fafc; padding: 12px; border-left: 4px solid #b91c1c; border-radius: 4px; line-height: 1.6; white-space: pre-wrap;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          ${resendAttachments.length > 0 ? `
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>Attached Documents (${resendAttachments.length}):</strong></p>
            <ul style="color: #334155; font-size: 13px; margin: 0; padding-left: 20px;">
              ${resendAttachments.map(a => `<li>📄 ${a.filename}</li>`).join('')}
            </ul>
          ` : ''}
          <p style="font-size: 12px; color: #64748b; margin-top: 20px;">
            <em>💡 Replying directly to this email will respond to ${email}.</em>
          </p>
        </div>
      `,
            ...(resendAttachments.length > 0 ? { attachments: resendAttachments } : {})
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ success: false, error });
        }

        return res.status(200).json({ success: true, ticketId, data });
    } catch (err) {
        console.error('API feedback error:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
}