// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'santhoshgunaseelan8@gmail.com',
            pass: 'sljl ivco ukgn ctin'
        }
    });

    const mailOptions = {
        from: 'impact11.com', 
        to: to,
        subject: 'OTP Verification',
        text: `Your One Time Password is ${otp}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("OTP sent to Email successfully");
    } catch (error) {
        console.error("Error sending OTP to email:", error);
    }
};

module.exports = sendEmail;
