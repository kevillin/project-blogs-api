const { Category } = require('../models');

const insertCategory = async (name) => {
  const { id } = await Category.create({ name });

  return { type: null, message: id };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

module.exports = {
  insertCategory,
  getAllCategories,
};