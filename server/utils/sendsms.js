const axios = require("axios");

const sendSMS = async (phoneNumber, otp) => {
  const MSG91_API_KEY = "384577AlnRXbjedIHj63661207P1";
  const MSG91_SENDER_ID = "1041841616129";
  const message = `Your OTP is ${otp}`;

  const url = "https://api.msg91.com/api/v5/otp";

  const data = {
    authkey: MSG91_API_KEY,
    mobile: phoneNumber,
    message: message,
    sender: MSG91_SENDER_ID,
    otp: otp
  };

  try {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error("Error sending OTP via SMS:", error);
  }
};

module.exports = sendSMS;
