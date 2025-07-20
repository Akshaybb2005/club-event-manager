require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const accessTokenSecret = 'secret';
  if (!accessTokenSecret) {
    return res.sendStatus(401);
  }
  const token = req.headers.authorization?.split(' ')[1]||req.token;
  
  const verified = jwt.verify(token, accessTokenSecret);
  console.log("token : " + verified);
  req.user = verified;
  next();
};

module.exports = {authenticateJWT};
