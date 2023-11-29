const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
});

const ContactModel = mongoose.model("Register", ContactUsSchema);

module.exports = ContactModel;
