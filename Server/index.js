require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const examRoutes = require("./routes/exams");


connection();


app.use(express.json());
app.use(cors());


const PORT_NUMBER = 3000;


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/exams", examRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
