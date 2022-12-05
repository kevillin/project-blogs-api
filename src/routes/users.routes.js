const express = require('express');
const { insertUser } = require('../controllers/user.controller');
const { validateUserFields } = require('../middlewares/user.middlewares');

const userRoute = express.Router();

userRoute.post('/', validateUserFields, insertUser);

module.exports = userRoute;