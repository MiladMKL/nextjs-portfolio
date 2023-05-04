import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, subject, phone } = req.body;

  // Create a Nodemailer transporter with your email credentials
  const transporter = nodemailer.createTransport({
    host: process.env.USER_HOST,
    port: 587,
    secure: false,
    service: "Gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });

  try {
    // Send the email using the transporter
    await transporter.sendMail({
      from: "myportfolio",
      to: process.env.USER_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: \n${message}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send the email" });
  }
}
