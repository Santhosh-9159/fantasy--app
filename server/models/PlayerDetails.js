const mongoose = require("mongoose");

// Define the Player schema
const playerSchema = new mongoose.Schema({
  teamId: {
    type: String, // Use String instead of ObjectId
    required: true,
  },
  playerImage: {
    type: String, // Store the base64 string directly
    required: true,
  },
  playerRoleId: {
    type: String, // Use String instead of ObjectId
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  creationTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  lastModified: {
    type: Date,
    required: true,
    default: Date.now,
  },
  _class: {
    type: String,
    required: true,
    default: "com.avitam.fantasy11.model.Player",
  },
});

// Middleware to update the lastModified field before saving
playerSchema.pre("save", function (next) {
  this.lastModified = Date.now();
  next();
});

// Create the Player model
const PlayerDetails = mongoose.model("Player", playerSchema);

module.exports = PlayerDetails;
