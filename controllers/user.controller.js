const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


// module.exports.registerNewUser = async (req, res) => {
//   try{
//     const user = new User(req.body);
//     const newUser = await user.save();
    
//     const userToken = jwt.sign(
//       {
//         _id : newUser.id,
//         firstName
//       }
//     )
//   }
// }



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

// register: (req, res) => {
//   User.create(req.body)
//     .then((user) => {
//       res.json({ msg: "success!", user: user });
//     })
//     .catch((err) => res.json(err));
// };
