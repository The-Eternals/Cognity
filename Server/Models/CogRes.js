const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
});

const CognityModel = mongoose.model("Register", RegisterSchema);

module.exports = CognityModel;
