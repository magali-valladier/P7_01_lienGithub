const db = require ("../models/index");
const Op = db.Sequelize.Op;
const Post = db.post;
const fs = require('fs');

exports.createPost = (req, res, next) => {
// Analyse le post en utilisant une chaîne de caractères
if(!req.body.content) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}
  const post= new Post({
    content: req.body.content,
    userId: req.body.userId,
    
});
console.log(post);
//Enregistre le post dans la base de données
  Post.create(post)
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllPost = (req, res, next) => {
const content = req.query.content;
const query = content ? { content: { [Op.like]: `%${content}%` } } : null;
  Post.find({ where: query })
  .then(data => {
      res.send.status(200).json(data);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.modifyPost = (req, res, next) => {
 const postModif = {};
if(!req.body.content) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}else {
  postModif["content"] = req.body.content;
}
const query = content ? { content: { [Op.like]: `%${content}%` } } : null;
Post.update(
  postModif,
  {
    where: query
  }
)
  .then((data) => res.status(200).json({data, message: 'Post modifié !'}))
  .catch(error => res.status(400).json({ error }));
};
  
exports.deletePost = (req, res, next) => {
// Supprime le post avec l'ID fourni.

  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
      Post.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Post supprimé !'}))
      .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };
  
