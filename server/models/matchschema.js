const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Matches schema
const matchSchema = new Schema(
  {
    team1Id: {
      type: String,
      required: true,
    },
    team2Id: {
      type: String,
      required: true,
    },
    dateAndTime: {
      type: Date,
      required: true,
    },
    matchStatus: {
      type: String,
      required: true,
    },
    tournamentId: {
      type: String,
      required: true,
    },
    sportTypeId: {
      type: String,
      required: true,
    },
    contestId: {
      type: String,
      required: true,
    },
    matchTypeId: {
      type: String,
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
    },
    lastModified: {
      type: Date,
      required: true,
    },
    _class: {
      type: String,
      required: true,
    },
  },
  {
    collection: "matches", // Optional: Specify collection name if different from the default
  }
);

// Create the Matches model
const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
