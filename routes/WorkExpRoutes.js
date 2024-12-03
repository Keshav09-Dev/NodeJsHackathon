const express = require("express");
const {
  createWorkExp,
  updateWorkExp,
} = require("../controllers/WorkExpController");

const router = express.Router();

router.post("/createworkexp", createWorkExp);
router.patch("/updateworkexp/:id", updateWorkExp);

module.exports = router;
