const bcrypt = require("bcrypt");
const db = require("../models/index");
const MaskData = require("maskdata");
const jwt = require('jsonwebtoken');
const Users = db.user

exports.signup = (req, res, next) => {
Users.create({
  pseudo: req.body.pseudo,
  email: MaskData.maskEmail2(req.body.email),
  password: hash
})
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
         pseudo: req.body.pseudo,
         email: MaskData.maskEmail2(req.body.email),
         password: hash
        });
        
        user.save() 
          .then(user => res.status(201).json( user ))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
      console.log(user);
};

/*exports.login = (req, res, next) => {

  const Users = db.Users;

  Users.findOne({ 
    where: { 
      email: req.body.email 
    }
  }) 
    .then(user => {
      if (!user) { 
        return res.status(404).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password) 
        .then(valid => {
          if (!valid) {
            return res.status(400).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({ 
            user,
            token: jwt.sign(
              { userId: user.id },
              process.env.SECRET_TOKEN,
              { expiresIn: '24h' }
              )
          })
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};*/