const categoryService = require('../services/category.service');

const insertCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const { message: { id } } = await categoryService.insertCategory(name);

  return res.status(201).json({ id, name });
};

const getAllCategories = async (req, res) => {
  const { type, message } = await categoryService.getAllCategories();

  if (type) {
    return res.status(400).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = {
  insertCategory,
  getAllCategories,
};