const { User } = require('../models');

const insertUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
};

module.exports = {
  insertUser,
};