const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comment');
const auth = require ('../middleware/auth');

//Routes
router.post('/:id/comment', auth, commentsCtrl.createComment);
router.get('/:id/comment', auth, commentsCtrl.getAllComments);

 

module.exports = router;