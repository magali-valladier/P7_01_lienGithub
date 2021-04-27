const bcrypt = require("bcrypt");
const db = require("../models/index");
const MaskData = require("maskdata");
const jwt = require('jsonwebtoken');
const User = db.user;

exports.signup = async (req, res, next) => {
  
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
     const user = {
        pseudo: req.body.pseudo,
        email: MaskData.maskEmail2(req.body.email),
        password: hash
      };
      
      User.create(user) 
          .then(user => res.status(201).json( user ))
      })
    
    .catch(error => res.status(500).json({ error }));
      
    }
exports.login = (req, res, next) => {

  const User = db.user;

  User.findOne({ 
    where: { 
      
      email:req.body.email,
      
    }
  }) 
    .then(user => {
      if (!user) { 
        return res.status(404).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password) 
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log(req.body.password);
          res.status(200).json({ 
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.SECRET_TOKEN,
              { expiresIn: '24h' }
              )
          })
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};