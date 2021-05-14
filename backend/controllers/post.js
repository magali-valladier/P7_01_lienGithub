const db = require ("../models/index");
const Post = db.Post;
const jwt = require('jsonwebtoken');

exports.createPost = (req, res, next) => {

if(req.body.content == null) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}
const token = req.headers.authorization.split(' ')[1];
const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
const userId = decodedToken.userId;
  const post= {
    content: req.body.content,
    userId: userId,
    
};
const User = db.User;

    User.findOne({
        where: {
            id: userId
        }
    })
console.log(post);
//Enregistre le post dans la base de données
 Post.create(post)
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(() => res.status(400).json({ message: "erreur post controller"} ));
};

exports.findAll = (req,res) => {
   
  Post.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Une erreur s'est produite lors de la récupération"
    });
  });
};

exports.modifyPost = (req, res, next) => {
 
if(!req.body) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}

const id = req.params.id;

Post.modifyPost(id, req.body)
.then(data => {
  if (!data) {
    res.status(404).send({
      message: `Impossible de modifier le post avec id=${id}`
    });
  }else res.send({ message: "Post modifié avec succes ! "});
})
.catch(err => {
  res.status(500).send({ message: "Erreur avec la modification ud post avec l'id" + id });
});
};
exports.deletePost = (req, res, next) => {

  const id = req.params.id;
  
  Post.deletePost(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Impossible de suprimer le post avec l'id=${id}`
      });
    }else {
      res.send({ message: "Post supprimé avec succes !"});
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Impossible de trouver le post à supprimer avec l'id" + id
    });
  })
  };
  
