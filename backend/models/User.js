module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    pseudo: {
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
    },
    
  });
  User.associate = (models) => {
    User.hasMany(models.posts, {
      foreignKey: 'userId',
    });
  }
  return User;
};