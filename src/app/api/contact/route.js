import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  const { name, email, service, message } = await request.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Contact] ${escapeHtml(service)} – ${escapeHtml(name)}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
      html: `
        <table style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-collapse: collapse;">
          <tr>
            <td style="background: #FF37B3; padding: 24px;">
              <h2 style="margin: 0; color: #fff; font-size: 20px;">New Contact Form Submission</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px; border: 1px solid #e5e7eb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 10px 0; font-weight: bold; color: #312749; width: 100px;">Name</td>
                  <td style="padding: 10px 0; color: #625C70;">${escapeHtml(name)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 10px 0; font-weight: bold; color: #312749;">Email</td>
                  <td style="padding: 10px 0; color: #625C70;">${escapeHtml(email)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 10px 0; font-weight: bold; color: #312749;">Service</td>
                  <td style="padding: 10px 0; color: #625C70;">${escapeHtml(service)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #312749; vertical-align: top;">Message</td>
                  <td style="padding: 10px 0; color: #625C70; white-space: pre-wrap;">${escapeHtml(message)}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
