const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

let schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "USER",
  },
});

exports.UsersModel = mongoose.model("users", schema);
