const { verifyToken } = require('./jwtFunctions');
require('dotenv/config');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const decoded = verifyToken(authorization);

  if (decoded.isError) {
    return res
      .status(401)
      .json({ message: 'Expired or invalid token' });
  }

  next();
};
