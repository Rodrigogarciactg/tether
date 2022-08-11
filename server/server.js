const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("coockie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
require("./config/mongoose.config");
require("./routes/user.routes")(app);

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
