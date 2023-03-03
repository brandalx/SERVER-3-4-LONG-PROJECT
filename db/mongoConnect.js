import mongoose from 'mongoose'
import { urldb } from '../config/config.js'

export async function main() {
  mongoose.set('strictQuery', false)
  await mongoose.connect(urldb)
  console.log('mongo connect server atlas')
}
