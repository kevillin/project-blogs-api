const { User } = require('../models');

const getAllUsers = async () => {
  const allUsers = User.findAll();

  return { type: null, message: allUsers };
};

const insertUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
};

module.exports = {
  insertUser,
  getAllUsers,
};