const mongoose = require("mongoose");

const SocialLinkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Please provide the url of the social media"],
    unique: true,
  },
});

const SocialMedia = mongoose.model("SocialLink", SocialLinkSchema);
module.exports = SocialMedia;
