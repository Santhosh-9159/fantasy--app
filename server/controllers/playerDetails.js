const PlayerDetails = require("../models/PlayerDetails");

exports.getallplayerDetails = async (req, res) => {
  try {
    const getplayerdetails = await PlayerDetails.find({});
    res.send({ status: "ok", data: getplayerdetails });
    // console.log(getplayerdetails, "Get player details ");
  } catch (error) {
    console.log(error, "Get player details error");
  }
};
