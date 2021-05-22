const bcrypt = require("bcrypt");
const db = require("../models/index");
const MaskData = require("maskdata");
const jwt = require('jsonwebtoken');
const User = db.user;

exports.signup = async (req, res, next) => {
  
  if (req.body.pseudo == null || req.body.email == null || req.body.password == null) {
    return res.status(400).json({ 'error': 'Merci de renseigner tous les champs !'});
  }
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
     const user = {
        pseudo: req.body.pseudo,
        email: MaskData.maskEmail2(req.body.email),
        password: hash,
        isAdmin: 0
      };
      
      User.create(user) 
          .then(user => res.status(201).json( user ))
      })
    
    .catch(error => res.status(500).json({ error }));
      
    }
    exports.login = (req, res, next) => {  
      
      if ( !req.body.email && !req.body.password ) {
        return res.status(400).json({message: "champ manquant"})
    }

      User.findOne({
        where: {
          email: MaskData.maskEmail2(req.body.email),
        }
      })
        .then((user) => {
          console.log(user);
          if (!user) {
            return res.status(401).json({ error: 'Utilisateur inconnu' });
          }
          console.log(req.body);
          bcrypt.compare(req.body.password, user.password) 
            .then((valid) => {
              if (!valid) {
                return res.status(401).json({ error: 'Utilisateur ou mot de passe erroné' });
              }
              res.status(200).json({
                userId: user.id,
                token: jwt.sign(
                  { userId: user.id }, 'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }),
                });
              
            });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    };
    exports.findByPk = (req, res) => {
      User.findByPk(req.params.id).then((user) => {
        res.status(200).json({
          status: true,
          data: user,
        });
      });
    };
    exports.update = (req, res) => {
      const id = req.params.id;
      User.update(
        {
          pseudo: req.body.pseudo,
          email: MaskData.maskEmail2(req.body.email),
          password: hash,
          isAdmin: 0
        },
        { where: { id: id } }
      ).then(() => {
        res.status(200).json({
            status: true,
            message: "Utilisateur modifié avec id = " + id
        });
      });
    };
    exports.delete = (req, res) => {
      const id = req.params.id;
      User.destroy({
        where : { id: id }
       })
          .then(() => res.status(200).json({ message: 'Utilisateur supprimé' }))
          .catch(error => res.status(500).json({ error }));
        
     
    };