const express = require('express')
const app = express()
const path = require("path");
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");
const commentsRoutes = require ("./routes/comments");
const bodyParser = require('body-parser');
const cors = require('cors');
require("./db.config.js");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors());
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/comments', commentsRoutes);
  //input sanitization against XXS attacks(helmet also does the same in this package)
app.use(xss());

//Set HTTP headers with helmet
app.use(helmet());

//limit several sessions in a shortime to avoid force's attacks
app.use(rateLimit());

module.exports = app;