const bcrypt = require("bcrypt");

const User = require("../models/User");
const MaskData = require("maskdata");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
//Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base de données
    
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
         email: MaskData.maskEmail2(req.body.email),
         password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    /*Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant
userID depuis la base de données et un jeton Web JSON signé (contenant également
l'identifiant userID)*/
    User.findOne({ email: MaskData.maskEmail2(req.body.email)})
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
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