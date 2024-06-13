const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  playerName: {
    type: String,
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  playerImage: {
    $binary: {
      base64: {
        type: String,
        required: true,
      },
      subType: {
        type: String,
        required: true,
      },
    },
  },
  playerRoleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PlayerRole",
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
    $date: {
      type: Date,
      default: Date.now,
    },
  },
  lastModified: {
    $date: {
      type: Date,
      default: Date.now,
    },
  },
  _class: {
    type: String,
    default: "com.avitam.fantasy11.model.Player",
  },
});

playerSchema.pre("save", function (next) {
  this.lastModified.$date = Date.now();
  next();
});

const PlayerDetails = mongoose.model("Players", playerSchema);

module.exports = PlayerDetails;
