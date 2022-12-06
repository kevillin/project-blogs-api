const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { insertUser, getAllUsers, getUserById } = require('../controllers/user.controller');
const { validateUserFields } = require('../middlewares/user.middlewares');

const userRoute = express.Router();

userRoute.post('/', validateUserFields, insertUser);
userRoute.get('/', validateJWT, getAllUsers);
userRoute.get('/:id', validateJWT, getUserById);

module.exports = userRoute;