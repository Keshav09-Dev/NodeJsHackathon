const User = require("../models/userModel");
const PreferredLanguage = require("../models/Language");

const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      bio,
      phone,
      gender,
      address,
      email,
      city,
      state,
      pincode,
      country,
      PreferredLanguageCode,
    } = req.body;
    if (
      !firstName ||
      !age ||
      !gender ||
      !email ||
      !city ||
      !state ||
      !pincode ||
      !country ||
      !address
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const taskExist = await User.findOne({ email });

    if (taskExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const preferredLanguage = await PreferredLanguage.findOne({
      code: PreferredLanguageCode,
    });
    if (!preferredLanguage) {
      return res.status(400).json({ message: "Preferred language not found" });
    }

    const user = await User.create({
      firstName,
      lastName,
      age,
      bio,
      phone,
      gender,
      address,
      email,
      city,
      state,
      pincode,
      country,
      preferredLanguage: preferredLanguage._id,
      bio,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  updateUser,
};
