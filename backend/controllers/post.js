const mysql = require("mysql");
const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
// Analyse le post en utilisant une chaîne de caractères

  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  console.log(postObject);
  const post= new Post({
    ...postObject,
//Capture et enregistre l'image en définissant correctement son image URL
imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
});
//Enregistre le post dans la base de données
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllPost = (req, res, next) => {
// Renvoie le tableau de toutes les posts dans la base de données
  Post.find().then(
    (posts) => {
      res.status(200).json(posts);
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
//Met à jour le post avec l'identifiant fourni.  

const postObject = req.file ?
{
//Si une image est téléchargée, capturez-la et mettez à jour l'image URL des posts.
  ...JSON.parse(req.body.post),
  imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
/*Si aucun fichier n'est fourni, les détails du figurent directement dans le
corps de la demande*/
}: { ...req.body };
//Si un fichier est fourni, le post avec chaîne est en req.body.post.

        
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
  
  .then(() => res.status(200).json({ message: 'Post modifié !'}))
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
  
