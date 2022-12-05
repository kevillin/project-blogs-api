const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  // if (!token) {
  //   return res.status(401).json({ error: 'Token não encontrado' });
  // }
  const decoded = jwt.verify(token, secret);
  const user = await User.findByPk(decoded.data.email);

  // if (!user) {
  //   return res
  //     .status(401)
  //     .json({ message: 'Erro ao procurar usuário do token.' });
  // }

  req.user = user;
  next();
};
