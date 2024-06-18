const Match = require("../models/matchesschema");
const PlayerRole = require("../models/playerRoleSchema");
const Team = require("../models/teamSchema");

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find({});

    const populatedMatches = await Promise.all(
      matches.map(async (match) => {
        const team1 = await Team.findById(match.teamId1);
        const team2 = await Team.findById(match.teamId2);

        if (team1 && team2) {
          const team1Base64Image = team1.logo.toString("base64");
          const team2Base64Image = team2.logo.toString("base64");

          return {
            ...match.toObject(),
            team1LogoUri: `data:image/jpeg;base64,${team1Base64Image}`,
            team2LogoUri: `data:image/jpeg;base64,${team2Base64Image}`,
          };
        }

        return match.toObject();
      })
    );

    res.send({ status: "ok", data: populatedMatches });
  } catch (error) {
    res.status(500).json({ message: "Error fetching matches", error });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.send({ status: "ok", data: teams });
  } catch (error) {
    res.status(500).json({ message: "Error fetching teams", error });
  }
};
const playerRole = async (req, res) => {
  console.log("Fetching player roles...");
  try {
    const playerRoles = await PlayerRole.find();
    res.send({ status: "ok", data: playerRoles });
  } catch (error) {
    console.error("Error fetching player roles:", error);
    res.status(500).json({ message: "Error fetching player roles", error });
  }
};

module.exports = { getMatches, getTeams, playerRole };
