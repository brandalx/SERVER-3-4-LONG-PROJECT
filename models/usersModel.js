const mongoose = require("mongoose");
const Joi = require("joi");
//Import for Json Web Token for user authentication and authorization
const jwt = require("jsonwebtoken");
//Basic user scema model for Mongo Data Base
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
//Scema import to users route
exports.UsersModel = mongoose.model("users", schema);
//Joi validation Schema
exports.validateJoi = (_reqBody) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(200).required(),
    //this will handle and make validation for email
    email: Joi.string().min(1).max(300).email().required(),
    password: Joi.string().min(1).max(100).required(),
  });
  //returns valid schema
  return joiSchema.validate(_reqBody);
};
//Joi validation schema for Log in
exports.validateLogin = (_reqBody) => {
  let joiSchema = Joi.object({
    //this will handle and make validation for email
    email: Joi.string().min(1).max(300).email().required(),
    password: Joi.string().min(1).max(100).required(),
  });
  return joiSchema.validate(_reqBody);
};

exports.createToken = (user_id) => {
  //          ===>           PLEASE MENTION: [THIS] KEY WILL BE CHANGED WHEN WILL BE DEPLOYED TO THE REAL SERVER
  //                                           \/
  //                       payload    | the secret key |  options object (will expire in 60 minutes)
  let token = jwt.sign({ _id: user_id }, "secretWord", { expiresIn: "60mins" });
  return token;
};
