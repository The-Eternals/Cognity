const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CognityModel = require("./Models/CogRes");

const app = express();
app.use(express.json());
app.use(cors());

// PORT NUMBER
const PORT_NUMBER = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/Cognity");

app.post("/Login", (req, res) => {
  const { userName, password } = req.body;
  CognityModel.findOne({ userName: userName }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login Successfully");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("User Not Found");
    }
  });
});

app.post("/Register", (req, res) => {
  CognityModel.create(req.body)
    .then((regis) => res.json(regis))
    .catch((err) => res.json(err));
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});
