const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postsCtrl = require('../controllers/post');

router.post('/post', auth, postsCtrl.createPost);
router.put('/post/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/post/:id', auth, postsCtrl.deletePost);

module.exports = router;