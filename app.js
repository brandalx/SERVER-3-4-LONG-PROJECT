const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
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
      title: "My API",
      version: "1.0.0",
      description: "My API with MongoDB",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3001}`,

        description: "Local server",
      },
    ],
  },
  // API routes folder
  apis: ["./routes/*.js"],
};
// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);
// Serve the Swagger UI with the generated OpenAPI specification file
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
