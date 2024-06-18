const express = require("express");
const { getallplayerDetails } = require("../controllers/playerDetails");
const router = express.Router();

router.get("/getplayerdetails", getallplayerDetails);

module.exports = router;
