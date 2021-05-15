const db = require ("../models/index");
const Post = db.post;
const fs = require('fs');

exports.createPost = (req, res, next) => {
// Analyse le post en utilisant une chaîne de caractères
if(req.body.content == null) {
  return res.status(400).send({
    message: "Votre message createPost ne peut pas être vide"
  });
}

  const post= {
    content: req.body.content,
    userId: req.body.userId,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
};
console.log(post);
//Enregistre le post dans la base de données
 Post.create(post)
    .then(()=> res.status(201).json({ message: 'Post enregistré !'}))
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
    message: "Votre message modifié ne peut pas être vide"
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
  
