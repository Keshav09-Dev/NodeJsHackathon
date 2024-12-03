const express = require("express");
const { createLanguage } = require("../controllers/languageController");

const router = express.Router();

router.post("/createlanguage", createLanguage);

module.exports = router;
