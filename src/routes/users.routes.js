const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { insertUser, getAllUsers } = require('../controllers/user.controller');
const { validateUserFields } = require('../middlewares/user.middlewares');

const userRoute = express.Router();

userRoute.post('/', validateUserFields, insertUser);
userRoute.get('/', validateJWT, getAllUsers);

module.exports = userRoute;