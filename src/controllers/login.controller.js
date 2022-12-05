const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const verifyLogin = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ where: { email } });

  if (!findUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  if (findUser.dataValues.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  verifyLogin,
};