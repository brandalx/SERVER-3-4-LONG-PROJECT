const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  UsersModel,
  validateJoi,
  validateLogin,
} = require("../models/usersModel");

const { auth } = require("../middlewares/auth");

//Function to generate random amount of starts when JSON response will be returned to the user;
const randomStars = () => {
  let generate = "*".repeat(Math.floor(Math.random() * 10) + 1);
  return generate;
};

//To someone will have not direct access to the users data base it will send by / to default users route endpoint
router.get("/", async (req, res) => {
  res.json({ msg: "Users endpoint" });
});
//POST Route for creating a new user with a hashed password by using bcrypt
router.post("/", async (req, res) => {
  let validBody = validateJoi(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = new UsersModel(req.body);
    //Encrypting the password property so that it is stored encrypted in the database; salt value of 10
    user.password = await bcrypt.hash(user.password, 10);
    //Then save to Mongo DB occures
    user = await user.save();
    // Exclude the user's password from the retrieved data by creating random amount of "*"
    user.password = randomStars();
    //JSON wth user data returns to the user
    res.status(201).json(user);
    //If a user with the same email already exists in the system the route throwns error
  } catch (err) {
    if (err.code == 11000) {
      return res.status(400).json({
        msg: "This email is already exist in our system, please try log in again ",
        code: 11000,
      });
    }
    // To handle default error that may thrown if 11000 hasnt occured
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let validBody = validateJoi(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let data = await UsersModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await UsersModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router;

module.exports = router;
