const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { insertCategory, getAllCategories } = require('../controllers/category.controller');

const categoryRoute = express.Router();

categoryRoute.post('/', validateJWT, insertCategory);
categoryRoute.get('/', validateJWT, getAllCategories);
// categoryRoute.get('/:id', validateJWT, getUserById);

module.exports = categoryRoute;