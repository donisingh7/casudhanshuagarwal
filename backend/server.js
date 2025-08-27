import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware
app.use(cors()); // if needed, restrict: cors({ origin: ["http://localhost:5173", "https://your-frontend.com"] })
app.use(express.json());

// Multer (in‑memory) for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// --- Gmail SMTP transporter (recommended explicit host config)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // e.g., financesaarthi1@gmail.com
    pass: process.env.EMAIL_PASS, // 16-char App Password (no spaces/quotes)
  },
});

// Verify SMTP on startup
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ SMTP verify failed:", err);
  } else {
    console.log("✅ SMTP ready to send");
  }
});

// --- Routes
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Simple test sender
app.get("/api/test-email", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: `"SMTP Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "SMTP Test OK",
      text: "If you can read this in Inbox/All Mail/Spam, SMTP works ✅",
    });
    console.log("TEST messageId:", info.messageId, "response:", info.response);
    res.json({ ok: true, messageId: info.messageId, response: info.response });
  } catch (e) {
    console.error("TEST EMAIL ERR:", e);
    res.status(500).json({ ok: false, error: e.message });
  }
});

// Contact form (JSON)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ error: "Name & email required" });
    }

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // send as authenticated user
      replyTo: email, // user can reply directly to the sender
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message || ""}`,
    });

    console.log("CONTACT messageId:", info.messageId, "response:", info.response);
    res.json({ success: true, msg: "Message sent!" });
  } catch (err) {
    console.error("/api/contact error:", err);
    res.status(500).json({ error: err?.message || "Failed to send" });
  }
});

// Resume form (multipart/form-data)
app.post("/api/resume", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, role, message } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ error: "Name & email required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Resume (PDF) required" });
    }

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Resume Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nRole: ${role || "N/A"}\n\nMessage:\n${message || ""}`,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype || "application/pdf",
        },
      ],
    });

    console.log("RESUME messageId:", info.messageId, "response:", info.response);
    res.json({ success: true, msg: "Resume submitted!" });
  } catch (err) {
    console.error("/api/resume error:", err);
    res.status(500).json({ error: err?.message || "Failed to submit resume" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
