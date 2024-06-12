const express = require('express');
const router = express.Router();
const { verifyOtp } = require('../controllers/authcontroller');
const { loginWithEmail } = require('../controllers/authcontroller');
const { loginWithPhone } = require('../controllers/authcontroller');
const { resendOtp } = require('../controllers/authcontroller');

router.post('/login/email', loginWithEmail);
router.post('/login/phone', loginWithPhone);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);

module.exports = router;
