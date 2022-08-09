const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
