const express = require("express");
const {
  createLink,
  updateLink,
} = require("../controllers/SocialMediaController");

const router = express.Router();

router.post("/createlink", createLink);
router.patch("/updatelink/:id", updateLink);

module.exports = router;
