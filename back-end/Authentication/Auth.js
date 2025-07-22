require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const accessTokenSecret = 'secret'; // or process.env.JWT_SECRET

  console.log('Headers:', req.headers);
  console.log('Cookies:', req.cookies);

  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

  console.log('Extracted token:', token);

  if (!token) {
    return res.status(401).json({ message: "Authentication token is missing." });
  }

  try {
    const verified = jwt.verify(token, accessTokenSecret);
    req.user = verified;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = { authenticateJWT };
