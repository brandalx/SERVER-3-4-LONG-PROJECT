const express = require("express");
const http = require("http");
const path = require("cors");

// Routes initilization
const { routesInit } = require("./routes/config_routes");

//Connecting to the database
require("./db/mongo_connect");

const app = express();
// Disables security, and allows to make an IP request from another domain from another server
app.use(cors());

//To send body from client side
app.use(express.json());

routesInit(app);

// Define a static folder that will be the "public" folder
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
let port = process.env.PORT || 3002;
server.listen(port);
