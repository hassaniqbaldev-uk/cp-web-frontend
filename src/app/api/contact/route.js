import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getContactEmailTemplate } from "@/emails/contact-template";
import { getCustomerEmailTemplate } from "@/emails/customer-template";

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

  const sanitized = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    service: escapeHtml(service),
    message: escapeHtml(message),
  };

  try {
    // Internal notification to you
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Contact] ${sanitized.service} – ${sanitized.name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
      html: getContactEmailTemplate(
        sanitized.name,
        sanitized.email,
        sanitized.service,
        sanitized.message
      ),
    });

    // Confirmation reply to the customer
    await transporter.sendMail({
      from: `"CreativePixels Agency" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out – ${sanitized.service}`,
      text: `Hi ${name},\n\nThank you for contacting CreativePixels Agency. We've received your request for ${service} and our team will get back to you shortly.\n\nBest regards,\nCreativePixels Team`,
      html: getCustomerEmailTemplate(
        sanitized.name,
        sanitized.email,
        sanitized.service,
        sanitized.message
      ),
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
