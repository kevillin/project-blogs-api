const categoryService = require('../services/category.service');

const insertCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const { message: { id } } = await categoryService.insertCategory(name);

  return res.status(201).json({ id, name });
};

const getAllCategories = () => {

};

module.exports = {
  insertCategory,
  getAllCategories,
};