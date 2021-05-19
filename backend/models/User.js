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
   },
  {timestamps: false
  });
  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
    });
  }
  return User;
};