const express = require("express");
const {
  getMatches,
  getTeams,
  playerRole,
  getTeamPlayers,
} = require("../controllers/matchController");
const router = express.Router();

router.get("/matches", getMatches);
router.get("/teams", getTeams);
router.get("/playerrole", playerRole);
router.post("/getteamplayers", getTeamPlayers);

module.exports = router;
