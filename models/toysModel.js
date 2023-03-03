import mongoose from 'mongoose'

//Definition for Schema to make request to the Mongo DB

let schema = new mongoose.Schema({
  name: String,
  info: String,
  category: String,
  img_url: String,
  price: Number,
  date_created: {
    type: Date,
    default: Date.now
  },
  user_id: String
})
//TO DO: user_id for users
export const ToysModel = mongoose.model('toys', schema)
