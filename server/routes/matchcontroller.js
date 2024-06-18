const express = require("express");
const {
  getMatches,
  getTeams,
  playerRole,
} = require("../controllers/matchController");
const router = express.Router();

router.get("/matches", getMatches);
router.get("/teams", getTeams);
router.get("/playerrole", playerRole);

module.exports = router;
