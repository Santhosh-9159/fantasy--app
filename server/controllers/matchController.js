const mongoose = require("mongoose");
const PlayerRole = require("../models/playerRoleSchema");
const Team = require("../models/teamSchema");
const Match = require("../models/matchschema");
const PlayerDetails = require("../models/PlayerDetails");

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find({});
    // console.log(matches, "matches data");

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
    if (!team1id || !team2id) {
      return res
        .status(400)
        .json({ message: "team1id and team2id are required." });
    }

    const playersTeam1 = await PlayerDetails.find({ teamId: team1id });
    const playersTeam2 = await PlayerDetails.find({ teamId: team2id });

    // Assuming playerImage is already stored as Base64 in MongoDB
    const allPlayers = [...playersTeam1, ...playersTeam2].map((player) => ({
      ...player.toObject(),
      playerImage: player.playerImage, // Ensure it's already a Base64 string
    }));
    console.log(allPlayers,"allpalyers aaaa");

    res.json({
      status: "ok",
      data: allPlayers,
    });
  } catch (error) {
    console.error("Error fetching player details:", error);
    res.status(500).json({ message: "Error fetching player details", error });
  }
};

module.exports = { getMatches, getTeams, playerRole, getTeamPlayers };
