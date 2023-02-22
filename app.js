const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");

// Routes initilization
const { routesInit } = require("./routes//configRoutes");

//Connecting to the database
require("./db/mongoConnect");

const app = express();
// Disables security, and allows to make an IP request from another domain from another server
app.use(cors());

//To send body from client side
app.use(express.json());
// Define a static folder that will be the "public" folder
app.use(express.static(path.join(__dirname, "public")));
routesInit(app);

const server = http.createServer(app);
// When upload to a real server that the server will provide its port
// the port itself instead of me having to change it manually
let port = process.env.PORT || 3001;
server.listen(port);
