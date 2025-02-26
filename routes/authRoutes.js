const express = require("express");
const { signup } = require("../Controller/AuthController");
const validateSignup = require("../Middleware/ValidateSignUp");

const router = express.Router();

router.post("/signup", validateSignup, signup);

module.exports = router;