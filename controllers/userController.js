import express from 'express'
import bcrypt from 'bcrypt'

import { UsersModel, validateLogin, createToken } from '../models/usersModel.js'
import { validateJoi } from '../validation/userValidation.js'

//Function to generate random amount of starts when JSON response will be returned to the user;

const usersController = {
  randomStars() {
    let numOfStars = Math.floor(Math.random() * 4) + 6
    return '*'.repeat(numOfStars)
  },

  //To someone will have not direct access to the users data base it will send by / to default users route endpoint
  async getUsers(req, res) {
    res.json({ msg: 'Users endpoint' })
  },
  //POST Route for creating a new user with a hashed password by using bcrypt
  async postUser(req, res) {
    let validBody = validateJoi(req.body)
    if (validBody.error) {
      return res.status(400).json(validBody.error.details)
    }
    try {
      let user = new UsersModel(req.body)
      //Encrypting the password property so that it is stored encrypted in the database; salt value of 10
      user.password = await bcrypt.hash(user.password, 10)
      //Then save to Mongo DB occures
      user = await user.save()
      // Exclude the user's password from the retrieved data by creating random amount of "*"
      user.password = usersController.randomStars()
      //JSON wth user data returns to the user
      res.status(201).json(user)
      //If a user with the same email already exists in the system the route throwns error
    } catch (err) {
      if (err.code == 11000) {
        return res.status(400).json({
          msg: 'This email is already exist in our system, please try log in again ',
          code: 11000
        })
      }
      // To handle default error that may thrown if 11000 hasnt occured
      console.log(err)
      res.status(502).json({ err })
    }
  },

  // Authenticating a user by verifying their email and password and returning a JSON web token if the authentication is successful.
  async postLogin(req, res) {
    let validBody = validateLogin(req.body)
    if (validBody.error) {
      return res.status(400).json(validBody.error.details)
    }
    try {
      // Checks if the email sent to body even exists in the database
      let user = await UsersModel.findOne({ email: req.body.email })
      if (!user) {
        return res.status(401).json({ err: 'Email not found / user dont exist' })
      }
      // Checks if the encrypted password in the database matches the password in body sended, if not throws error
      let validPassword = await bcrypt.compare(req.body.password, user.password)
      if (!validPassword) {
        return res.status(401).json({ err: "Password you're entered is wrong" })
      }
      // The user will be sent a token that will allow him to be in areas that require permission;
      let newToken = createToken(user._id, user.role)

      res.json({ token: newToken })
      // res.redirect(`/userInfo?token=${newToken}`);
    } catch (err) {
      console.log(err)
      res.status(502).json({ err })
    }
  },

  //Retrieving a user's information based on the token that is sent in the request header.
  //GOES TO MIDDLEWARE FUNCTION {AUTH}, THEN ASYNC(req,res) HAPPENS
  // auth -> middleware function that runs before the router's main function

  async getUserInfo(req, res) {
    try {
      let user = await UsersModel.findOne(
        //req.tokedata is manual value whic we passed as global from auth

        { _id: req.tokenData._id },
        //deletes password from resposnse
        { password: 0 }
      )

      res.json(user)
    } catch (err) {
      console.log(err)

      return res.status(502).json({ err })
    }
  },

  // Update user details by ID
  async putUser(req, res) {
    const id = req.params.id
    const tokenDataId = req.tokenData._id

    // Find the user by ID from token
    let user = await UsersModel.findOne({ _id: req.tokenData._id })

    // Check if user is unauthorized
    if (id !== tokenDataId) {
      // Check if user is admin
      if (!(user && user.role === 'admin')) {
        return res.status(401).json({ error: 'Unauthorized' })
      }
    }

    // Validate user input using Joi schema
    const validBody = validateJoi(req.body)
    if (validBody.error) {
      return res.status(400).json(validBody.error.details)
    }

    try {
      // Hash the users new password before updating
      const passwordHash = await bcrypt.hash(req.body.password, 10)
      req.body.password = passwordHash

      // Update the user details
      const data = await UsersModel.updateOne({ _id: id }, req.body)
      res.json(data)
    } catch (err) {
      console.log(err)
      return res.status(502).json({ err })
    }
  },

  async deleteUser(req, res) {
    const id = req.params.id
    const tokenDataId = req.tokenData._id
    let user = await UsersModel.findOne({ _id: req.tokenData._id })

    // Check if user is an admin, if yes, delete the user by id
    if (user && user.role === 'admin') {
      const data = await UsersModel.deleteOne({ _id: id })
      return res.json(data)
    }

    // Check if id in the token matches the id to be deleted
    if (id !== tokenDataId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    // Delete the user by id
    try {
      const data = await UsersModel.deleteOne({ _id: id })
      res.json(data)
    } catch (err) {
      console.log(err)
      return res.status(502).json({ err })
    }
  }
}

export default usersController
