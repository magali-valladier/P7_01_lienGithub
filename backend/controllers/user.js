const bcrypt = require("bcrypt");
const { Sequelize, DataTypes } = require('sequelize');
const User = require("../models/User");
const sequelize = require('../db.config');
const MaskData = require("maskdata");
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
//Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base de données

    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
         pseudo: req.body.pseudo,
         email: MaskData.maskEmail2(req.body.email),
         password: hash
        });
        sequelize.query(`INSERT INTO users(pseudo, email, password) VALUES('${user.pseudo}','${user.email}','${user.password}')`)        
          .then(() => res.status(201).json({ message: 'Compte créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).send({ error });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };