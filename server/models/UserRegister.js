const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  invitecode: {
    type: String,
  },
});

const UserRegister = mongoose.model("Register", registerSchema);

module.exports = UserRegister;
