const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    teamId1: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    teamId2: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    dateAndTime: { type: Date, required: true },
    matchStatus: { type: Boolean, required: true },
    tournamentId: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
    sportTypeId: {
      type: Schema.Types.ObjectId,
      ref: "SportType",
      required: true,
    },
    contestId: { type: Schema.Types.ObjectId, ref: "Contest", required: true },
    matchTypeId: {
      type: Schema.Types.ObjectId,
      ref: "MatchType",
      required: true,
    },
    creator: { type: String, required: true },
    status: { type: Boolean, required: true },
    creationTime: { type: Date, required: true },
    lastModified: { type: Date, required: true },
  },
  {
    collection: "matches", // Optional: Specify collection name if different from the default
  }
);

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
