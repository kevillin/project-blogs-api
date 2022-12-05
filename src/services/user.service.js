const { User } = require('../models');

const getAllUsers = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });

  return user;
};

// const getUsersByEmailAndPassword = async (request) => {
//   if (request.user) {
//     return User.findAll({ 
//       where: { userId: request.user.id },
//       attributes: { exclude: 'id' },
//     });
//   }

//   return Post.findAll({
//     attributes: { exclude: 'id' },
//   });
// };

module.exports = {
  getAllUsers,
//   getUsersByEmailAndPassword,
};