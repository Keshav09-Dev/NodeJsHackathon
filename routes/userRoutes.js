const express = require("express");
const { createUser, updateUser } = require("../controllers/userController");

const router = express.Router();

router.post("/createuser", createUser);
router.patch("/updateuser/:id", updateUser);

module.exports = router;
