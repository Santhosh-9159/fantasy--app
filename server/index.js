const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/authroutes");
const userRegister = require("./routes/userRegister");
const playerDetails = require("./routes/playerDetails");


// //server setup and connect
app.listen(5000, () => {
  console.log("Server connected");
});

// //Mongodb database setup and connect
const MONGOURL = process.env.MONGODB;
mongoose.connect(MONGOURL).then(console.log("Database connected"));

// Routes
app.use("/auth", authRoutes);
app.use("/auth", userRegister);


app.use('/api',playerDetails);
