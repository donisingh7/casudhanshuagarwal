// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const text =
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\n` +
      `Message:\n${message}`;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.EMAIL_USER,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New contact from ${name}`,
      text,
    });

    return res.status(200).json({ ok: true, message: "Sent" });
  } catch (err) {
    console.error("CONTACT error:", err);
    return res.status(500).json({ error: "Email send failed" });
  }
}
