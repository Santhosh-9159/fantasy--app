const mongoose = require("mongoose");

const matchTypeSchema = new mongoose.Schema({
  matchType: {
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
    default: Date.now,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
  _class: {
    type: String,
    default: "com.avitam.fantasy11.model.MatchType",
  },
});

// Middleware to update the lastModified field before saving
matchTypeSchema.pre("save", function (next) {
  this.lastModified = Date.now();
  next();
});

const MatchType = mongoose.model("matchtypes", matchTypeSchema);

module.exports = MatchType;
