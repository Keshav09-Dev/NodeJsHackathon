const User = require("../models/userModel");
const Language = require("../models/Language");

const createLanguage = async (req, res) => {
  try {
    const { name, code } = req.body;
    if (!code || !name) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const languageExist = await Language.findOne({ name });

    if (languageExist) {
      return res
        .status(400)
        .json({ success: false, message: "Language already exists" });
    }

    const user = await Language.create({
      name,
      code,
    });

    res.status(201).json({
      success: true,
      message: "Language added successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLanguage,
};
