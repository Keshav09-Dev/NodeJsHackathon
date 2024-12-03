const mongoose = require("mongoose");

const WorkExpSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Please provide the job title"],
  },
  companyName: {
    type: String,
    required: [true, "Please provide the name of the company"],
  },
  startDate: {
    type: Date,
    required: [true, "Please provide the start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Please provide the start date"],
  },
  employementType: {
    type: string,
    required: [true, "Please provide the type of the employement"],
  },
  industry: {
    type: string,
    required: [true, "Please provide the type of the industry"],
  },
  location: {
    type: string,
    required: [true, "Please provide the location of the company"],
  },
});

const WorkExp = mongoose.model("WorkExp", WorkExpSchema);
module.exports = WorkExp;
