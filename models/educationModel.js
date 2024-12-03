const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: [true, "Please provide the name of the degree"],
  },
  fieldOfStudy: {
    type: String,
    required: [true, "Please provide the field of study"],
  },
  college: {
    type: String,
    required: [true, "Please provide the name of the College"],
  },
  startDate: {
    type: Date,
    required: [true, "Please provde the start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Please provde the end date"],
  },
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
