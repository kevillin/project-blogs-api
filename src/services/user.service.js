const { User } = require('../models');

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });

  return { type: null, message: allUsers };
};

const getUserById = async (id) => {
  const userById = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return { type: null, message: userById };
};

const insertUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
};

module.exports = {
  insertUser,
  getAllUsers,
  getUserById,
};