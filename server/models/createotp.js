const mongoose = require("mongoose");
const express = require("express");

const otpSchema = new mongoose.Schema({
  identifier: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "5m" },
});

const otpcreate = mongoose.model("Otp", otpSchema);

exports.otpcreate = otpcreate;
