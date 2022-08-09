const UserController = require("../controllers/user.controller");
module.exports = (app) => {
  app.get("/api", UserController.index);
  app.post("/api/users", UserController.createUser);
};
