// controllers/inquiryController.js
const Inquiry = require("../Model/Message");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Send email function
const sendEmail = async (inquiry) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use your email provider (e.g., gmail, yahoo, etc.)
            auth: {
                user: process.env.EMAIL_USER, // Replace with your email
                pass: process.env.EMAIL_PASS, // Replace with your email password or app-specific password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: inquiry.email,
            subject: "Thank you for your inquiry!",
            html: `
              <div style="font-family: Arial, sans-serif; color: #000;">
                <p style="color: #000">Hi <strong>${inquiry.name}</strong>,</p>
                <p style="color: #000">Thank you for reaching out! We have received your message:</p>
                <span style="color: #000">
                  "${inquiry.message}"
                </span>
                <p style="color: #000">We will get back to you shortly.</p>
                <p style="color: #000">Best regards,</p>
                <p style="color: #000"><strong>Support Team TCSPL</strong></p>
              </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

// Create Inquiry
exports.createInquiry = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const inquiry = new Inquiry({ name, email, message });
        await inquiry.save();

        // Send confirmation email
        await sendEmail(inquiry);

        res.status(201).json({ message: "Inquiry submitted successfully!" });
    } catch (error) {
        console.error("Error creating inquiry:", error);
        res.status(500).json({ message: "Server error" });
    }
};
