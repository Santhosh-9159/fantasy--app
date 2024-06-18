// controllers/userController.js

const User = require("../models/UserRegister");
const UserRegister = require("../models/UserRegister");

// Function to handle user registration
exports.userRegister = async (req, res) => {
  try {
    const { username, mobilenumber, email, invitecode } = req.body;

    // Check if the user already exists by email or mobile number
    const existingUser = await UserRegister.findOne({
      $or: [{ email }, { mobilenumber }],
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new document using the UserRegister model
    const newUser = new UserRegister({
      username,
      mobilenumber,
      email,
      invitecode,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("User registration failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const getuser = await User.find();
    res.send({ status: "ok", data: getuser });
    console.log(getuser, "getuser details");
  } catch (error) {
    console.error("Get User failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
