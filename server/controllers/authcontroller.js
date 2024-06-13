const jwt = require("jsonwebtoken");
const generateOTP = require("../utils/generateOTP");
const sendEmail = require("../utils/sendEmail");
const sendSMS = require("../utils/sendsms");
const { otpcreate } = require("../models/createotp");
const UserRegister = require("../models/UserRegister");

const SECRET_KEY = "wfgksdfninqkfofnndakfw325";

exports.loginWithEmail = async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  try {
    const existingUser = await UserRegister.findOne({ email });

    if (existingUser) {
      // Check if OTP already exists for the user
      let otpDoc = await otpcreate.findOne({ identifier: email });

      if (otpDoc) {
        // Update existing OTP
        otpDoc.otp = otp;
        otpDoc.createdAt = Date.now();
        await otpDoc.save();
      } else {
        // Create new OTP
        otpDoc = await otpcreate.create({ identifier: email, otp });
      }

      // Send OTP via Email
      await sendEmail(email, otp);

      res.send({ success: true });
    } else {
      // User not found, return error
      res.status(404).send({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: "Failed to generate OTP" });
  }
};




exports.loginWithPhone = async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = generateOTP();

  try {
    const oldUser = await UserRegister.findOne({ mobilenumber:phoneNumber  });

    if(oldUser){
  // Save OTP in the database
  await otpcreate.create({ identifier: phoneNumber, otp });

  // Send OTP via SMS
  await sendSMS(phoneNumber, otp);
    }else {
      res.status(404).send({ success: false, error: "User does not exist" });

    }
  

    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: "Failed to generate OTP" });
  }
};

exports.verifyOtp = async (req, res) => {
  const { identifier, otp } = req.body;

  try {
    const otpDoc = await otpcreate.findOne({ identifier, otp });

    if (otpDoc) {
      // Check if the OTP has expired
      const currentTime = new Date();
      if (currentTime - otpDoc.createdAt > 5 * 60 * 1000) {
        // Assuming 5 minutes expiry
        return res.status(401).send({ success: false, error: "OTP expired" });
      }

      // Generate token (assuming you have a function to generate a token)
      const token = jwt.sign({ identifier }, "wfgksdfninqkfofnndakfw325");
      console.log(token, "Token");

      const result = await otpcreate.updateOne(
        { _id: otpDoc._id },
        { $unset: { otp: "" } }
      );
      console.log("Update Result:", result);

      res.send({ success: true, token });
    } else {
      res.status(401).send({ success: false, error: "Invalid OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: "Error verifying OTP" });
  }
};

exports.resendOtp = async (req, res) => {
  const { identifier } = req.body;
  const otp = generateOTP();

  try {
    await otpcreate.findOneAndUpdate(
      { identifier },
      { otp, createdAt: Date.now() },
      { upsert: true }
    );

    // Determine if the identifier is an email or phone number
    if (identifier.includes("@")) {
      await sendEmail(identifier, otp);
    } else {
      await sendSMS(identifier, otp);
    }

    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: "Failed to resend OTP" });
  }
};
