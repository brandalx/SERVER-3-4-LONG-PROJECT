const indexRoute = require("./index");
const usersRoute = require("./users");

exports.routesInit = (app) => {
  app.use("/main", indexRoute);
  app.use("/users", usersRoute);
};

//To do: 404 route
