const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
  const token = req.cookies.access_Token;

  if (!token) {
    return res.status(401).json("You are not authenticated!");

  }
  else {
    jwt.verify(token, process.env.JWTPASSWORD, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  }
};



const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();

    }
    else {
      res.status(403).json("You are not alowed to do that!");
    }

  });
};



const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {

    if (req.user.isAdmin) {
      next();

    }
    else {
      res.status(403).json("You are not alowed to do that!");
    }

  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };