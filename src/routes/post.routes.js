const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { getAllBlogPost } = require('../controllers/post.controller');
// const { validatePostFields } = require('../middlewares/post.middlewares');

const postRoute = express.Router();

postRoute.get('/', validateJWT, getAllBlogPost);

module.exports = postRoute;
