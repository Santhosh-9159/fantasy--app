const express = require("express");
const { userRegister } = require("../controllers/UserRegister");
const router = express.Router();

router.post('/userRegister',userRegister)






module.exports = router;
