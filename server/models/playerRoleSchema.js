const mongoose = require("mongoose");

const playerRoleSchema = new mongoose.Schema({
  playerRole: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  creationTime: {
    type: Date,
    default: Date.now,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
  _class: {
    type: String,
    default: "com.avitam.fantasy11.model.PlayerRole",
  },
});

const PlayerRole = mongoose.model("playerroles", playerRoleSchema);

module.exports = PlayerRole;
