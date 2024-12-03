const express = require("express");
const {
  createTopic,
  updateTopic,
} = require("../controllers/InterstedTopicController");

const router = express.Router();

router.post("/createtopic", createTopic);
router.patch("/updatetopic/:id", updateTopic);

module.exports = router;
