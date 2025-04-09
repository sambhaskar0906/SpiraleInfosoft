const Application = require('../Model/Application');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Send email function
const sendEmail = async (application) => {
    try {
        console.log("Preparing to send email to:", application.email);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: application.email,
            subject: "Application Received",
            html: `
                <div style="font-family: Arial, sans-serif; color: #000;">
                    <p>Dear <strong>${application.name}</strong>,</p>
                    <p>Thank you for applying for the <strong>${application.jobType}</strong> position.</p>
                    <p>We have successfully received your application.</p>
                    <p>Best regards,</p>
                    <p><strong>HR Team TCSPL</strong></p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw new Error("Email sending failed.");
    }
};


// Submit application function
const submitApplication = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Uploaded file path:", req.file?.path);

        if (!req.file) {
            return res.status(400).json({ message: "CV file not uploaded or missing." });
        }

        const { name, email, phone, jobType } = req.body;
        const cv = req.file.path;

        // Save application to the database
        const newApplication = await Application.create({ name, email, phone, jobType, cv });

        console.log("New application created:", newApplication);

        // Send confirmation email
        await sendEmail(newApplication);

        res.status(200).json({
            message: "Application submitted successfully!",
            application: newApplication,
        });
    } catch (error) {
        console.error("Error in submitApplication:", error.message);
        res.status(500).json({ message: "Failed to submit application", error: error.message });
    }
};

module.exports = { submitApplication };

