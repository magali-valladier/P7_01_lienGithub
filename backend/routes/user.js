// Import

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes

router.post('/signup', multer, userCtrl.signup);

module.exports = router;