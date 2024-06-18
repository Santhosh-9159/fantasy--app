const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  logo: {
    type: Buffer,
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
    default: Date.now,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
    required: true,
  },
  _class: {
    type: String,
    required: true,
  },
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
