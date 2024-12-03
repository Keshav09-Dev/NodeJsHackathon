const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  bio: { type: String, trim: true },
  phone: { type: String, trim: true },
  age: {
    type: String,
    required: [true, "Please Enter age"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["male", "female", "other"],
      message: "Gender must be male, female, or other",
    },
  },
  address: {
    line1: {
      type: String,
      required: [true, "Address line 1 is required"],
      trim: true,
    },
    line2: {
      type: String,
      trim: true,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
    trim: true,
  },
  state: {
    type: String,
    required: [true, "State is required"],
    trim: true,
  },
  pincode: {
    type: String,
    required: [true, "Pincode is required"],
    match: [/^\d{6}$/, "Please enter a valid 6-digit pincode"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
    trim: true,
  },
  preferredLanguage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PreferredLanguage",
  },
});

module.exports = mongoose.model("User", userSchema);
