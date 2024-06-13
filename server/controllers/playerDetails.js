const Match = require("../models/PlayerDetails");
const MatchType = require("../models/PlayerDetails");

exports.getallplayerDetails = async (req, res) => {
  try {
    const getplayerdetails = await MatchType.find({});
    res.send({ status: "ok", data: getplayerdetails });
    console.log(getplayerdetails);
  } catch (error) {
    console.log(error, "Get player details error");
  }
};
