// api/resume.js
import nodemailer from "nodemailer";
import formidable from "formidable";
import { readFile } from "fs/promises";

export const config = {
  api: {
    bodyParser: false, // let formidable handle multipart
  },
};

function parseForm(req) {
  const form = formidable({ multiples: false, keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { fields, files } = await parseForm(req);
    const name = fields?.name?.toString() || "";
    const email = fields?.email?.toString() || "";
    const phone = fields?.phone?.toString() || "";
    const role = fields?.role?.toString() || "";
    const message = fields?.message?.toString() || "";

    if (!name || !email) {
      return res.status(400).json({ error: "Name & email required" });
    }
    const file = files?.resume;
    if (!file) {
      return res.status(400).json({ error: "Resume (PDF) required" });
    }

    // Read uploaded file to a buffer
    const fileBuffer = await readFile(file.filepath);
    const filename = file.originalFilename || "resume.pdf";
    const contentType = file.mimetype || "application/pdf";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.EMAIL_USER,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Resume Submission",
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n` +
        `Role: ${role || "N/A"}\n\nMessage:\n${message || ""}`,
      attachments: [
        { filename, content: fileBuffer, contentType },
      ],
    });

    console.log("RESUME messageId:", info.messageId, "response:", info.response);
    return res.status(200).json({ success: true, msg: "Resume submitted!" });
  } catch (err) {
    console.error("RESUME error:", err);
    return res.status(500).json({ error: err?.message || "Failed to submit resume" });
  }
}
