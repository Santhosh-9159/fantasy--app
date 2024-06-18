const express = require("express");
const { userRegister, getUser } = require("../controllers/UserRegister");
const router = express.Router();

router.post("/userRegister", userRegister);
router.get("/getuser", getUser);

module.exports = router;
