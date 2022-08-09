const User = require("../models/user.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createUser = (request, response) => {
  User.create(request.body)
    .then((User) => response.json(User))
    .catch((err) => response.json(err));
};
    