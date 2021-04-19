const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Post = sequelize.define('Post', {
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
   date_heure: {
       type: DataTypes.DATETIME,
       allowNull: false
   }
});

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true