const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

router.post('/login/post', postCtrl.createPost);
router.put('/post/:id', auth, multer, postCtrl.modifyPost);
router.delete('/post/:id', auth, postCtrl.deletePost);

module.exports = router;