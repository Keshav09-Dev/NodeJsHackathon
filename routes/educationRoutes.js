const express = require("express");
const {
  createEducation,
  updateEducation,
} = require("../controllers/educationController");

const router = express.Router();

router.post("/createeducation", createEducation);
router.patch("/updateeducation/:id", updateEducation);

module.exports = router;
