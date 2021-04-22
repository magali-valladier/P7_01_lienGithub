const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multerConfig');

const postsCtrl = require('../controllers/post');

router.post('/', auth, multer, postsCtrl.createPost);
router.get('/', auth, postsCtrl.getAllPost);
router.put('/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);

module.exports = router;