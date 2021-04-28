// Import
const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const multer = require('../middleware/multer-config');



// Routes

router.post('/signup', multer, userCtrl.signup);
router.post('/login',auth, userCtrl.login);

module.exports = router;