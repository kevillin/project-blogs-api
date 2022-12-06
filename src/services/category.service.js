const { Category } = require('../models');

const insertCategory = async (name) => {
  const { id } = await Category.create({ name });

  return { type: null, message: id };
};

module.exports = {
  insertCategory,
};