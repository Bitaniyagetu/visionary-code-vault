const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // ensure this is near the top

const app = express();
const PORT = 3001;

// allow your dev frontend(s)
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8080'],
}));
app.use(express.json());

app.get('/', (_req, res) => res.send('Backend is running!'));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Missing fields' });
    }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.TO_EMAIL) {
      console.error('❌ Missing env vars (SMTP_USER/SMTP_PASS/TO_EMAIL)');
      return res.status(500).json({ success: false, error: 'Server not configured' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      // Use your authenticated Gmail as the sender
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      // And set the visitor’s address as reply-to
      replyTo: email,
      to: process.env.TO_EMAIL,
      subject: `New Contact • ${subject}`,
      text: `
New message from your portfolio:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${process.env.TO_EMAIL} (from visitor ${email})`);
    res.json({ success: true });
  } catch (err) {
    console.error('❌ Email send failed:', err?.response || err);
    res.status(500).json({ success: false, error: 'Email send failed' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
