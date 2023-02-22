const express = require("express");
const router = express.Router();
const { ToysModel, validateJoi } = require("../models/toysModel");

//In POSTMAN  change: request type to to GET, choose Body ===> row

// GET request handle
//Query example: http://localhost:3001/toys/?page=1&sort=name&desc=yes

router.get("/", async (req, res) => {
  let perPage = 5;
  // Variable to list the page
  let page = req.query.page - 1 || 0;
  // Variable to sort if not will use an mongo _id
  let sort = req.query.sort || "_id";
  // Variable to sort by acs or desc order
  let desc = req.query.desc == "yes" ? 1 : -1;
  try {
    let data = await ToysModel.find({})
      //makes display limit per page
      .limit(perPage)
      //helps to make two variables works together in order to achieve page listing
      .skip(page * perPage)
      //makes an possible to sort by choosen option
      .sort({ [sort]: desc });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

// GET request to handle search
//Query example: http://localhost:3001/toys/search/?s=shuttle
router.get("/search", async (req, res) => {
  let querySearch = req.query.s;
  //Regular Expression added to make query request as non key sensative "i"

  let searchExpression = new RegExp(querySearch, "i");
  try {
    let data = await ToysModel.find({
      // // $or - built in mongoose function for Mongo DB to make search for keys name, info, type of the toys route
      $or: [{ name: searchExpression }, { info: searchExpression }],
    }).limit(20);
    //limits result as 100 items max
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

// GET request to handle search by category with using params
//Params example: http://localhost:3001/toys/category/figures
router.get("/category/:catname", async (req, res) => {
  let catParam = req.params.catname;
  let searchExpression = new RegExp(catParam, "i");
  try {
    let data = await ToysModel.find({ category: searchExpression });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
