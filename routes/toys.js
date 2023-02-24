const express = require("express");
const router = express.Router();
const { ToysModel, validateJoi } = require("../models/toysModel");
const { auth } = require("../middlewares/auth");

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
    return res.status(502).json({ err });
  }
});

// GET request to handle search
//Query example: https://toysrestapi/toys/search/?s=shuttle
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
    return res.status(502).json({ err });
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
    return res.status(502).json({ err });
  }
});

// POST request to handle an adding the new item to data base:
/* Example for valid POST request through POSTMAN:
In POSTMAN  change: request type to to POST, choose body ==> row, then enter adress in url field: http://localhost:3001/toys

example:

{
  "name": "Lego Ninjago Golden Dragon",
  "info": "This set includes a golden dragon, three minifigures, and assorted weapons.",
  "category": "Construction Sets",
  "img_url": "https://images-na.ssl-images-amazon.com/images/I/81nA1edvR9L._AC_SL1500_.jpg",
  "price": 19.99
  }
  */

// TODO: add auth after all requests settled
router.post("/", auth, async (req, res) => {
  //Checks first that returned object from Joi validation is even valid, if not throws an error and not continues to make POST request
  let validBody = validateJoi(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  //If returned Joi schema is valid creates an new obejct in JSON  and puts it in data base
  try {
    let toy = new ToysModel(req.body);
    toy.user_id = req.tokenData._id;
    await toy.save();
    res.json(toy);
    //if any error occures will throw an error
  } catch (err) {
    console.log(err);
    return res.status(502).json({ err });
  }
});

// PUT request to handle an updating the existed item in the data base:
/* Example for valid PUT request through POSTMAN:
In POSTMAN  change: request type to to PUT, adress to:
https://toysrestapi/toys/63f67afa1c859b4d063e03f4

{
        "name": "Lego City Space Mars Research Shuttle 2.0",
        "info": "This set includes a new space shuttle, five astronaut minifigures, and a two rovers",
        "category": "Action Figures & Playsets",
        "img_url": "https://images-na.ssl-images-amazon.com/images/I/81YyWWuB7zL._AC_SL1500_.jpg",
        "price": 10.00       
}
*/

//Id will be added through an params option

router.put("/:editId", auth, async (req, res) => {
  //Joi checks
  let validBody = validateJoi(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    //id definition
    let id = req.params.editId;
    let data;
    if (req.tokenData.role == "admin") {
      data = await ToysModel.updateOne(
        { _id: id }, // user_id:req.tokenData._id -> The user will only be able to edit records he added
        req.body
      );
      res.json(data);
    } else {
      //actual update of existed object by provided ID
      data = await ToysModel.updateOne(
        { _id: id, user_id: req.tokenData._id }, // user_id:req.tokenData._id -> The user will only be able to edit records he added
        req.body
      );
      res.json(data);
    }
  } catch (err) {
    //handling error
    console.log(err);
    return res.status(502).json({ err });
  }
});

// DELETE request to handle an delete item from the data base:
/* Example for valid DELETE request through POSTMAN:
In POSTMAN  change: request type to to DELETE, adress to:
http://localhost:3001/toys/63f67b01e7dadcb2291e0828 
*/
// code will try to delete and makes check only users adds and not all the others.
//code will filter by user id
router.delete("/:delId", auth, async (req, res) => {
  try {
    //params defenition
    let id = req.params.delId;
    let data;
    if (req.tokenData.role == "admin") {
      let data = await ToysModel.deleteOne({
        _id: id,
      });
      res.json(data);
    } else {
      data = await ToysModel.deleteOne({
        _id: id,
        user_id: req.tokenData._id,
      }); //now wit help of user_id: req.tokenData._id, we will delete only something whats only user created
      res.json(data);
    }

    // response about succ delete
    /* POSTMAN will display something like: 
{
    "acknowledged": true,
    "deletedCount": 1
}
*/

    // if not will throw to an error
  } catch (err) {
    return res.status(502).json({ err });
  }
});
//exports whole route to config routes
module.exports = router;
