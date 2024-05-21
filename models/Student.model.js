const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// The schema is where we define all the properties that our documents are going to have
const studentSchema = new Schema({
  username: String,
  role: String,
  age: Number,
  bootcamp: String,
  hasCampusKey: Boolean,
  hobbies: Array,
  projects: Array,
});

// after creating the schema we tell mongoose to create this model based on the schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
