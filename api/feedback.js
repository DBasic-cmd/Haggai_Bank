// api/feedback.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, category, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const ticketId = `TICK-${Date.now().toString().slice(-6)}`;

    try {
        const { data, error } = await resend.emails.send({
            // Testing address provided by Resend
            from: 'Feedback Desk <onboarding@resend.dev>',

            // Where customer service receives it
            // During test mode: use 'delivered@resend.dev' or your registered Resend account email
            to: ['delivered@resend.dev'],

            // Makes clicking "Reply" go directly to the submitting user
            reply_to: email,

            subject: `[${category || 'Feedback'}] Ticket #${ticketId} from ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="margin-top: 0; color: #0f172a;">New Support Inquiry (${ticketId})</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Category:</strong> <span style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">${category || 'General'}</span></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Message / Complaint:</strong></p>
          <div style="background-color: #f8fafc; padding: 12px; border-left: 4px solid #2563eb; border-radius: 4px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 12px; color: #64748b; margin-top: 20px;">
            <em>💡 Replying directly to this email will respond to ${email}.</em>
          </p>
        </div>
      `,
        });

        if (error) {
            return res.status(400).json({ success: false, error });
        }

        return res.status(200).json({ success: true, ticketId, data });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}