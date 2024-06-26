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
const matchcontroller = require("./routes/matchcontroller");

// Server setup and connect
app.listen(5000, () => {
  console.log("Server connected");
});

// MongoDB database setup and connect
const MONGOURL = process.env.MONGODB;
mongoose
  .connect(MONGOURL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/auth", authRoutes);
app.use("/auth", userRegister);
app.use("/api", playerDetails);
app.use("/api", matchcontroller);
