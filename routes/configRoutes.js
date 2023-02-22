const indexRoute = require("./index");
const usersRoute = require("./users");
const toysRoute = require("./toys");

exports.routesInit = (app) => {
  app.use("/main", indexRoute);
  app.use("/users", usersRoute);
  app.use("/toys", toysRoute);
  app.use((req, res) => {
    // res.status(404).send("Sorry, page not found.");
    res.status(404).json({
      msg: " The page you required was not found. If you are lost, follow to index.html",
    });
  });
};
