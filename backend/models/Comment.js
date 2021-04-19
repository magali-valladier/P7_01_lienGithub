const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Comment = sequelize.define('Comment', {
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
console.log(Comment === sequelize.models.Comment); // true