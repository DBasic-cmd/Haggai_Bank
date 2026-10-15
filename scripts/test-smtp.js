// scripts/test-smtp.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Helper to parse .env file without external dependencies
function loadEnv() {
    const envPath = path.resolve(process.cwd(), '.env');
    if (!fs.existsSync(envPath)) return;
    const content = fs.readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
            if (!process.env[key]) {
                process.env[key] = val;
            }
        }
    }
}

loadEnv();

async function runTest() {
    console.log('\n=========================================');
    console.log('  Haggai Bank SMTP Connection Diagnostics');
    console.log('=========================================\n');

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.FEEDBACK_RECEIVER_EMAIL || 'alwayson@haggai.com';
    const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

    console.log(`Target Recipient: ${recipient}`);
    console.log(`SMTP Host:       ${host || '[NOT SET]'}`);
    console.log(`SMTP Port:       ${port} (${isSecure ? 'SSL' : 'STARTTLS'})`);
    console.log(`SMTP User:       ${user || '[NOT SET]'}`);
    console.log(`SMTP Pass:       ${pass ? '********' : '[NOT SET]'}\n`);

    if (!host || !user || !pass) {
        console.log('⚠️  SMTP credentials are not yet configured in your .env file.');
        console.log('Once your client provides their credentials, add them to .env:');
        console.log('  SMTP_HOST=mail.haggai.com (or smtp.office365.com / smtp.gmail.com)');
        console.log('  SMTP_PORT=587');
        console.log('  SMTP_USER=alwayson@haggai.com');
        console.log('  SMTP_PASS=password_here\n');
        console.log('The backend code in api/feedback.js is already fully configured and ready to use them immediately.');
        return;
    }

    console.log('Testing SMTP connection handshake...');
    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: isSecure,
        auth: { user, pass },
        tls: {
            rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
        },
    });

    try {
        await transporter.verify();
        console.log('✅ SMTP connection successfully verified!\n');

        console.log(`Sending diagnostic email to ${recipient}...`);
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM || `"Haggai Bank Test" <${user}>`,
            to: recipient,
            subject: `[Test] Haggai Bank SMTP Diagnostic Test - ${new Date().toLocaleString()}`,
            text: 'This is a test email confirming that the Haggai Bank SMTP mailer is properly configured and delivering to alwayson@haggai.com.',
            html: `
              <div style="font-family: sans-serif; padding: 20px; border: 1px solid #10b981; border-radius: 8px;">
                <h2 style="color: #065f46; margin-top: 0;">✅ Haggai Bank SMTP Configuration Active</h2>
                <p>This email confirms that the contact and support form mailer on Haggai Bank portal is active and successfully delivering to <strong>${recipient}</strong>.</p>
                <p><small>Sent at: ${new Date().toISOString()}</small></p>
              </div>
            `,
        });

        console.log('✅ Diagnostic email sent successfully!');
        console.log(`   Message ID: ${info.messageId}\n`);
    } catch (err) {
        console.error('❌ SMTP Connection / Delivery Error:');
        console.error(`   ${err.message}\n`);
    }
}

runTest();
