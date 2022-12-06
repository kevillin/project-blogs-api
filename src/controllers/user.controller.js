const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
const { User } = require('../models');
// const { createToken } = require('../auth/jwtFunctions');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const getAllUsers = async (req, res) => {
  const { type, message } = await userService.getAllUsers();

  if (type) {
    return res.status(type).json({ message });
  }

  return res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (!message || type) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(message);
};

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const findUser = await User.findOne({ where: { email } });

  if (findUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await userService.insertUser(displayName, email, password, image);

  // createToken

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return res.status(201).json({ token });
};

module.exports = {
  insertUser,
  getAllUsers,
  getUserById,
};