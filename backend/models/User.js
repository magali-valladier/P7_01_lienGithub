//Connexion à la base de données
const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db.config')

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        'id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        'pseudo':{
            type: DataTypes.STRING,
            allowNull: false
        },
        'email': {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,   
        },
        'password': {
            type: DataTypes.STRING,
          }
    }, {
      tableName: 'users',
     
    });
  };