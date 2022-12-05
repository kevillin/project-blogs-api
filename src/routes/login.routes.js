const express = require('express');

const { verifyLogin } = require('../controllers/login.controller');
const { validateLoginFields } = require('../middlewares/login.middlewares');

const loginRouter = express.Router();

loginRouter.post('/', validateLoginFields, verifyLogin);

module.exports = loginRouter;