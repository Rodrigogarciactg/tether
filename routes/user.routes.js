const UserController = require("../controllers/user.controller");
module.exports = (app) => {
  app.get("/api", UserController.index);
  app.post("/api/users", UserController.createUser);
};

const Users = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
  app.post("/api/register", Users.createUser);
  // app.post("/api/login", Users.login);
//   app.get("/api/users", authenticate, Users.getAll);
};
