const Topic = require("../models/InterestedTopicModel");

const createTopic = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const TopicExist = await Topic.findOne({ name });

    if (TopicExist) {
      return res
        .status(400)
        .json({ success: false, message: "Topic already exists" });
    }

    const topic = await Topic.create({
      name,
    });

    res.status(201).json({
      success: true,
      message: "Topic added successfully",
      topic,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTopic = async (req, res) => {
  try {
    const id = req.params.id;
    const topic = await Topic.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      topic,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTopic,
  updateTopic,
};
