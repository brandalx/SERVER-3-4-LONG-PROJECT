// Import required modules
import express from 'express'
import http from 'http'
import path, { dirname } from 'path'

import cors from 'cors'
import { fileURLToPath } from 'url'
import { main } from './db/mongoConnect.js'
import { config } from 'dotenv'
// Routes initilization
import { routesInit } from './routes/configRoutes.js'
import { port } from './config/config.js'

// Connect to the MongoDB database

main().catch((err) => console.log(err))

// Get the current directory path using the URL of the current module
const __dirname = dirname(fileURLToPath(import.meta.url))
config()
const app = express()

// Define a route handler for the /swagger endpoint

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors())
// Parse incoming request body as JSON
app.use(express.json())

// Define a static folder that will be the "public" folder
app.use(express.static(path.join(__dirname, 'public')))

// Initialize the routes
routesInit(app)

// Create an HTTP server and start listening for requests
const server = http.createServer(app)

server.listen(port)
