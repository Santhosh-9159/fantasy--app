const jwt = require('jsonwebtoken');
const OtpModel = require('../models/otp');
const generateOTP = require('../utils/generateOTP');
const sendEmail = require('../utils/sendEmail');
const sendSMS = require('../utils/sendsms');

const SECRET_KEY = 'wfgksdfninqkfofnndakfw325';

exports.loginWithEmail = async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();

    try {
        // Save OTP in the database
        await OtpModel.create({ identifier: email, otp });

        // Send OTP via Email
        await sendEmail(email, otp);

        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'Failed to generate OTP' });
    }
};

exports.loginWithPhone = async (req, res) => {
    const { phoneNumber } = req.body;
    const otp = generateOTP();

    try {
        // Save OTP in the database
        await OtpModel.create({ identifier: phoneNumber, otp });

        // Send OTP via SMS
        await sendSMS(phoneNumber, otp);

        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'Failed to generate OTP' });
    }
};

exports.verifyOtp = async (req, res) => {
    const { identifier, otp } = req.body;

    try {
        const otpDoc = await OtpModel.findOne({ identifier, otp });

        if (otpDoc) {
            // Check if the OTP has expired
            const currentTime = new Date();
            if (currentTime - otpDoc.createdAt > 5 * 60 * 1000) { // Assuming 5 minutes expiry
                return res.status(401).send({ success: false, error: 'OTP expired' });
            }

            // Generate token (assuming you have a function to generate a token)
            const token = jwt.sign({ identifier }, 'wfgksdfninqkfofnndakfw325',);

            // Optionally delete the OTP document after successful verification
            await OtpModel.deleteOne({ _id: otpDoc._id });

            res.send({ success: true, token });
        } else {
            res.status(401).send({ success: false, error: 'Invalid OTP' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'Error verifying OTP' });
    }
};
exports.resendOtp = async (req, res) => {
    const { identifier } = req.body;
    const otp = generateOTP();

    try {
        await OtpModel.findOneAndUpdate({ identifier }, { otp, createdAt: Date.now() }, { upsert: true });

        // Determine if the identifier is an email or phone number
        if (identifier.includes('@')) {
            await sendEmail(identifier, otp);
        } else {
            await sendSMS(identifier, otp);
        }

        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'Failed to resend OTP' });
    }
};
