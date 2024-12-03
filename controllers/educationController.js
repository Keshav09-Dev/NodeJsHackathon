const Edu = require("../models/educationModel");

const createEducation = async (req, res) => {
  try {
    const { degree, fieldOfStudy, college, startDate, endDate } = req.body;
    if (!degree || !fieldOfStudy || !college || !startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const user = await Edu.create({
      degree,
      fieldOfStudy,
      college,
      startDate,
      endDate,
    });

    res.status(201).json({
      success: true,
      message: "Education added successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const id = req.params.id;
    const edu = await Edu.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      edu,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEducation,
  updateEducation,
};
