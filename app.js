const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
// Import the Swagger documentation from the separate file

// Routes initilization
const { routesInit } = require("./routes//configRoutes");

//Connecting to the database
require("./db/mongoConnect");

const app = express();
// Disables security, and allows to make an IP request from another domain from another server

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Toys REST API",
      version: "1.0.0",
      description:
        "Toys REST API - Swagger automated documantation. Please visit `https://toysrestapi.cyclic.app` for full custom documentation on the server side, or visit `https://toysrestapi.netlify.app` for front-end side of the app. ",
    },
    servers: [
      {
        url: `${process.env.PORT || 3001}`,
        description: process.env.PORT ? " Cyclic server " : "Local server",
      },
    ],
  },
  // API schema model for all routes
  apis: ["./swagger/swagger.js"],
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve the Swagger UI with the generated OpenAPI specification file
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define a route handler for the /swagger endpoint
app.use("/swagger", (req, res) => {
  res.json(swaggerDocs);
});

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
