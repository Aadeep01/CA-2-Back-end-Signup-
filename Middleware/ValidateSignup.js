const ValidateSignup = (req, res, next) => {
    const { username, email, password, dateOfBirth } = req.body;
  
    if (!username) {
      return res.status(400).json({ error: "Username cannot be empty" });
    }
  
    if (!email) {
      return res.status(400).json({ error: "Email cannot be empty" });
    }
  
    if (!password || password.length < 8 || password.length > 16) {
      return res
        .status(400)
        .json({ error: "Password length should be greater than 8 or less than or equal to 16" });
    }
  
    if (!dateOfBirth) {
      return res.status(400).json({ error: "Date of Birth is required" });
    }
  
    next();
  };
  
  module.exports = ValidateSignup;