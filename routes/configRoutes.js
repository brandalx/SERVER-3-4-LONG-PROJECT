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
      msg: "Error 404: The page you are looking for could not be found. Please check the URL and try again. If you're not sure where to go, you can always head back to the homepage by entering in the domain/index.html",
    });
  });
};
