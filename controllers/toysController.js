import { Router } from 'express'

import { ToysModel } from '../models/toysModel.js'
import { validateJoi } from '../validation/toyValidation.js'
// import { auth } from '../middlewares/auth.js'
import NodeCache from 'node-cache'
const cache = new NodeCache({ stdTTL: 30, checkperiod: 40 })

//In POSTMAN  change: request type to to GET, choose Body ===> row

// GET request handle
//Query example: https://toysrestapi.cyclic.app/toys/?page=1&sort=name&desc=yes

const toysController = {
  async getAllToys(req, res) {
    console.log('Searching if data in cache')
    let perPage = 5
    // Variable to list the page
    let page = req.query.page - 1 || 0
    // Variable to sort if not will use an mongo _id
    let sort = req.query.sort || '_id'
    // Variable to sort by acs or desc order
    let desc = req.query.desc == 'yes' ? 1 : -1
    // Generate cache key based on request query params
    const cacheKey = `toys-${perPage}-${page}-${sort}-${desc}`
    // Check if data is already in cache
    const cachedData = cache.get(cacheKey)
    if (cachedData) {
      console.log('Data found in cache, retrieving data...')

      return res.json(cachedData)
    }
    console.log('Data was not found in cache, sending request to the data base')
    try {
      let data = await ToysModel.find({})
        //makes display limit per page
        .limit(perPage)
        //helps to make two variables works together in order to achieve page listing
        .skip(page * perPage)
        //makes an possible to sort by choosen option
        .sort({ [sort]: desc })
      // Store data in cache
      console.log('Storing data for future requests...')
      cache.set(cacheKey, data)
      res.json(data)
    } catch (err) {
      console.log(err)
      return res.status(502).json({ err })
    }
  },

  // GET request to handle search
  //Query example: https://toysrestapi/toys/search/?s=shuttle
  async getSearchToys(req, res) {
    let querySearch = req.query.s
    //Regular Expression added to make query request as non key sensative "i"

    let searchExpression = new RegExp(querySearch, 'i')
    // Generate cache key based on request query params
    const cacheKey = `search-${querySearch}`
    // Check if data is already in cache
    const cachedData = cache.get(cacheKey)
    console.log('Searching if data in cache')
    if (cachedData) {
      console.log('Data found for /search route in cache, retrieving data...')
      return res.json(cachedData)
    }
    console.log('Data was not found for /search route in cache, sending request to the database')
    try {
      let data = await ToysModel.find({
        // // $or - built in mongoose function for Mongo DB to make search for keys name, info, type of the toys route
        $or: [{ name: searchExpression }, { info: searchExpression }]
      }).limit(20)
      //limits result as 20 items max
      // Store data in cache
      console.log('Storing data for future requests...')
      cache.set(cacheKey, data)
      res.json(data)
    } catch (err) {
      console.log(err)
      return res.status(502).json({ err })
    }
  },

  // GET request to handle search by category with using params
  //Params example: https://toysrestapi.cyclic.app/toys/category/figures
  async getToysByCat(req, res) {
    let catParam = req.params.catname
    let searchExpression = new RegExp(catParam, 'i')
    const cacheKey = `category-/${searchExpression}`
    // Check if data is already in cache
    const cachedData = cache.get(cacheKey)
    console.log('Searching if data in cache')
    if (cachedData) {
      console.log('Data found for /search route in cache, retrieving data...')
      return res.json(cachedData)
    }
    console.log('Data was not found for /search route in cache, sending request to the database')
    try {
      let data = await ToysModel.find({ category: searchExpression })
      console.log('Storing data for future requests...')
      cache.set(cacheKey, data)
      res.json(data)
    } catch (err) {
      console.log(err)
      return res.status(502).json({ err })
    }
  },

  // POST request to handle an adding the new item to data base:
  /* Example for valid POST request through POSTMAN:
In POSTMAN  change: request type to to POST, choose body ==> row, then enter adress in url field: https://toysrestapi.cyclic.app/toys

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
  async postToy(req, res) {
    //Checks first that returned object from Joi validation is even valid, if not throws an error and not continues to make POST request
    let validBody = validateJoi(req.body)
    if (validBody.error) {
      return res.status(400).json(validBody.error.details)
    }
    //If returned Joi schema is valid creates an new obejct in JSON  and puts it in data base
    try {
      let toy = new ToysModel(req.body)
      console.log('asking for the token')
      // console.log('token is ' + req.header('x-api-key'))
      toy.user_id = req.tokenData._id
      await toy.save()
      res.json(toy)
      //if any error occures will throw an error
    } catch (err) {
      console.log(err)
      return res.status(502).json({ err })
    }
  },

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

  async putToy(req, res) {
    //Joi checks
    let validBody = validateJoi(req.body)
    if (validBody.error) {
      return res.status(400).json(validBody.error.details)
    }
    try {
      //id definition
      let id = req.params.editId
      let data
      if (req.tokenData.role == 'admin') {
        data = await ToysModel.updateOne(
          { _id: id }, // user_id:req.tokenData._id -> The user will only be able to edit records he added
          req.body
        )
        res.json(data)
      } else {
        //actual update of existed object by provided ID
        data = await ToysModel.updateOne(
          { _id: id, user_id: req.tokenData._id }, // user_id:req.tokenData._id -> The user will only be able to edit records he added
          req.body
        )
        res.json(data)
      }
    } catch (err) {
      //handling error
      console.log(err)
      return res.status(502).json({ err })
    }
  },

  // DELETE request to handle an delete item from the data base:
  /* Example for valid DELETE request through POSTMAN:
In POSTMAN  change: request type to to DELETE, adress to:
https://toysrestapi.cyclic.app/toys/63f67b01e7dadcb2291e0828
*/
  // code will try to delete and makes check only users adds and not all the others.
  //code will filter by user id
  async deleteToy(req, res) {
    try {
      //params defenition
      let id = req.params.delId
      let data
      if (req.tokenData.role == 'admin') {
        let data = await ToysModel.deleteOne({
          _id: id
        })
        res.json(data)
      } else {
        data = await ToysModel.deleteOne({
          _id: id,
          user_id: req.tokenData._id
        }) //now wit help of user_id: req.tokenData._id, we will delete only something whats only user created
        res.json(data)
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
      return res.status(502).json({ err })
    }
  }
  //exports whole route to config routes
}

export default toysController
