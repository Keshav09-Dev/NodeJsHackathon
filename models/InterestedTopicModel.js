const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the topic"],
    unique: true,
  },
});

const InterestedTopic = mongoose.model("Topic", TopicSchema);
module.exports = InterestedTopic;
