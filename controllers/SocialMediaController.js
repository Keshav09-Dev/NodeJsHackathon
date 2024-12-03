const Link = require("../models/SocialMediaModel");

const createLink = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const urlExist = await Link.findOne({ url });

    if (urlExist) {
      return res
        .status(400)
        .json({ success: false, message: "Url already exists" });
    }

    const link = await Link.create({
      url,
    });

    res.status(201).json({
      success: true,
      message: "Social Media Link added successfully",
      link,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLink = async (req, res) => {
  try {
    const id = req.params.id;
    const link = await Link.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      link,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLink,
  updateLink,
};
