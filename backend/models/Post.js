module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
  userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id',
      }
  },
    content: {
      type: Sequelize.STRING
    },
    
  });

  return Post;
};