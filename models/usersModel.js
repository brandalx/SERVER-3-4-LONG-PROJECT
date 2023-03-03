import jwt from 'jsonwebtoken'
import Joi from 'joi'
import mongoose from 'mongoose'
import { tokenSecret } from '../config/config.js'

//Import for Json Web Token for user authentication and authorization

//Basic user scema model for Mongo Data Base
let schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date_created: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: 'USER'
  },
  //This is new paramter to display in response
  user_id: String
})
//Scema import to users route
export const UsersModel = mongoose.model('users', schema)

//Joi validation schema for Log in

export function validateLogin(_reqBody) {
  let joiSchema = Joi.object({
    //this will handle and make validation for email
    email: Joi.string().min(1).max(300).email().required(),
    password: Joi.string().min(1).max(100).required()
  })
  return joiSchema.validate(_reqBody)
}

export function createToken(user_id, role) {
  //          ===>           PLEASE MENTION: [THIS] KEY WILL BE CHANGED WHEN WILL BE DEPLOYED TO THE REAL SERVER
  //                                           \/
  //                       payload    | the secret key |  options object (will expire in 60 minutes)
  let token = jwt.sign({ _id: user_id, role }, tokenSecret, {
    expiresIn: '60mins'
  })
  return token
}
