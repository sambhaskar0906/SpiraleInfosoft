const Message = require('../Model/Message');
const nodemailer = require('nodemailer');

// Configure SMTP with Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Use 465 for secure
    secure: false, // true for port 465
    auth: {
        user: 'your-email@gmail.com', // Replace with your Gmail address
        pass: 'your-app-password',    // Replace with your App Password
    },
});

exports.createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save message to the database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Send email to admin
        const mailOptions = {
            from: 'your-email@gmail.com', // Sender email
            to: 'skbhaskar735@gmail.com', // Recipient email
            subject: 'New Message Received',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Failed to send email' });
            }
            res.status(201).json({ message: 'Message saved and email sent successfully!' });
        });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
