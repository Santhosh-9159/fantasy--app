const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

router.post('/login/email', authController.loginWithEmail);
router.post('/login/phone', authController.loginWithPhone);
router.post('/verify-otp', authController.verifyOtp);
router.post('/resend-otp', authController.resendOtp);

module.exports = router;
