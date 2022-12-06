const postService = require('../services/post.service');

const getAllBlogPost = async (req, res) => {
  const { message, type } = await postService.getAllBlogPost();

  if (type) {
    return res.status(type).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = {
  getAllBlogPost,
};