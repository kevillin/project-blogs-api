module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
  },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  
  PostCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};