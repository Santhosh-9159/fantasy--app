const mongoose = require("mongoose");
const PlayerRole = require("../models/playerRoleSchema");
const Team = require("../models/teamSchema");
const Match = require("../models/matchschema");

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find({});
    console.log(matches,"matches data");

    const populatedMatches = await Promise.all(
      matches.map(async (match) => {
        const team1 = await Team.findById(match.team1Id);
        const team2 = await Team.findById(match.team2Id);

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
    // console.log(teams,"teams data");
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

const getTeamPlayers = async (req, res) => {
  const { team1id, team2id } = req.body;
  try {
    console.log(`Received team1id: ${team1id}, team2id: ${team2id}`);

    if (!team1id || !team2id) {
      return res
        .status(400)
        .json({ message: "team1id and team2id are required." });
    }

    // Convert team1id and team2id to ObjectId if they are not already
    const team1ObjectId = mongoose.Types.ObjectId.isValid(team1id)
      ? new mongoose.Types.ObjectId(team1id)
      : null;
    const team2ObjectId = mongoose.Types.ObjectId.isValid(team2id)
      ? new mongoose.Types.ObjectId(team2id)
      : null;

    if (!team1ObjectId || !team2ObjectId) {
      return res.status(400).json({ message: "Invalid team1id or team2id." });
    }

    const playersTeam1 = await PlayerDetails.find({ teamId: team1ObjectId });
    const playersTeam2 = await PlayerDetails.find({ teamId: team2ObjectId });

    console.log(`Team1 players: ${JSON.stringify(playersTeam1)}`);
    console.log(`Team2 players: ${JSON.stringify(playersTeam2)}`);

    // Combine player arrays into a single array
    const allPlayers = [...playersTeam1, ...playersTeam2];

    res.send({
      status: "ok",
      data: allPlayers,
    });
  } catch (error) {
    console.error("Error fetching player roles:", error);
    res.status(500).json({ message: "Error fetching player roles", error });
  }
};

module.exports = { getMatches, getTeams, playerRole, getTeamPlayers };
