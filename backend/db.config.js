const mysql = require('mysql');
const { Sequelize } = require('sequelize');

const db = mysql.createConnection({

    host: 'localhost',
 
    user: 'root',
 
    password: 'root',

    database: 'groupomania',

    dialect: "mysql"
 
  });
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

  const sequelize = new Sequelize("Groupomania", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

try {
  sequelize.authenticate();
  console.log('Connecté à la base de données MySQL!');
} catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}