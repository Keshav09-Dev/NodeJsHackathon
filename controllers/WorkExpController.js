const Exp = require("../models/WorkExpModel");

const createWorkExp = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      startDate,
      endDate,
      employementType,
      industry,
      location,
    } = req.body;
    if (
      !jobTitle ||
      !companyName ||
      !startDate ||
      !endDate ||
      !employementType ||
      !industry ||
      !location
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const exp = await Exp.create({
      jobTitle,
      companyName,
      startDate,
      endDate,
      employementType,
      industry,
      location,
    });

    res.status(201).json({
      success: true,
      message: "Work Experiece added successfully",
      exp,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateWorkExp = async (req, res) => {
  try {
    const id = req.params.id;
    const exp = await Exp.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      exp,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateWorkExp,
  createWorkExp,
};
