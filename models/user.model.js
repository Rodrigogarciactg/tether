const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "First Name is required"] },
    lastName: { type: String, required: [true, "Last Name is required"] },
    phoneNumber: { type: Number },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    gradeLevel: { type: String },
    password: { type: String, required: [true, "Password is required"] },
  },
  { timestamps: true }
  );
  
  UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));
  
  UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
  });
  
  
  UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
      this.password = hash;
      next();
    });
  });
  
  // UserSchema.pre('save', async function (next) {
    //   try{
      //     const hashedPw = await bcrypt.hash(this.password, 10)
      //     this.password = hashedPw;
//     next();
//   }
//   catch(err) {
//     console.log('Password Error', err);
//   }
// });

module.exports = mongoose.model("User", UserSchema);
