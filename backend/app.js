const express = require('express')
const app = express()
const path = require("path");
const xss = require('xss');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const mysql = require('mysql');
const { Sequelize, Model, DataTypes } = require('sequelize');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  const db = mysql.createConnection({

    host: "localhost",
 
    user: "root",
 
    password: "Digimaglink13"
 
  });

app.use('/images', express.static(path.join(__dirname, 'images')));

  //input sanitization against XXS attacks(helmet also does the same in this package)
app.use(xss());

//Set HTTP headers with helmet
app.use(helmet());

//limit several sessions in a shortime to avoid force's attacks
app.use(rateLimit());

module.exports = app;