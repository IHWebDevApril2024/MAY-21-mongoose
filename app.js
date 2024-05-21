const express = require("express");
const morgansito = require("morgan");
const mongoose = require("mongoose");
const Student = require("./models/Student.model");
require("dotenv").config();

// server initialization
const app = express();

// MIDDLEWARES
app.use(morgansito("dev"));
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB)
  .then((res) => console.log("Connected to MONGODB: ", res.connections[0].name))
  .catch((error) => console.log(error));

app.get("/users", (request, response) => {
  console.log("this should send all the users to the client");
  // here is where we look for the students
  Student.find(
    { hasCampusKey: true },
    { username: 1, _id: 0, hasCampusKey: 1, age: 1 }
  )
    .limit(4)
    .then((data) => response.json(data))
    .catch(() => response.send("Sorry Marcel, you are doing it wrong"));
});

// Make the server listen to a port
app.listen(5005, () => console.log("The server is running on port 5005"));
