const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connection successfull");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

module.exports = dbConnect;
