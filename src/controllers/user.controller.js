const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const findUser = await User.findOne({ where: { email } });

  if (findUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await userService.insertUser(displayName, email, password, image);

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return res.status(201).json({ token });
};

module.exports = {
  insertUser,
};