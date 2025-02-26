const User = require("../models/User");

const signup = async (req, res) => {
  try {
    const { username, email, password, dateOfBirth } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({ username, email, password, dateOfBirth });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again later" });
  }
};

module.exports = { signup };