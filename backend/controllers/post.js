const db = require ("../models/index");
const Op = db.Sequelize.Op;
const Post = db.post;

exports.createPost = (req, res, next) => {
// Analyse le post en utilisant une chaîne de caractères
if(content == null) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}
  const post= new Post({
    content: req.body.content,
    idUSERS: req.body.idUSERS,
    userId: req.body.userId
    
});
console.log(post);
//Enregistre le post dans la base de données
  Post.create(post)
    .then(post => res.status(201).json({ "postId": post.id }, 'Post enregistré !'))
    .catch(error => res.status(400).json({ error }));
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

  const id = req.body.id;
  console.log(req.body);
  Post.destroy({ where: { id:id }})
  .then(() => res.status(200).json({ message: 'Post supprimé !' }))
  .catch(error => res.status(500).json({ error }));
  };
  
