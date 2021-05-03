const mysql = require('mysql');
const { Sequelize }  = require('sequelize');
require('dotenv').config();

const db = mysql.createConnection({

    host: 'DB_HOST',
 
    user: 'DB_USERNAME',
 
    password: 'DB_PASS',

    database: 'groupomania',

    dialect: "mysql"
 
  });
  

try {
  db;
  console.log('Connecté à la base de données MySQL!');
} catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}

