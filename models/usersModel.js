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

exports.validateJoi = (_reqBody) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(200).required(),
    //this will handle and make validation for email
    email: Joi.string().min(1).max(300).email().required(),
    password: Joi.string().min(1).max(100).required(),
  });
  return joiSchema.validate(_reqBody);
};
