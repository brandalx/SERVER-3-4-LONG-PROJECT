const mongoose = require("mongoose");
const Joi = require("joi");
const { date } = require("joi");
//Definition for Schema to make request to the Mongo DB

let schema = new mongoose.Schema({
  name: String,
  info: String,
  category: String,
  img_url: String,
  price: Number,
  date_created: {
    type: Date,
    default: Date.now,
  },
});
exports.ToysModel = mongoose.model("toys", schema);
