// Import
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const passValidate = require('../middleware/passValidate');
const mailValidate = require('../middleware/mailValidate');
const rateLimit = require("express-rate-limit");
const auth = require('../middleware/auth');

const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, 
  max: 5, // 
  message: " Trop de tentatives échouées, réessayez dans 5 minutes",
});


// Routes

router.post('/signup', mailValidate, passValidate, userCtrl.signup);
router.post('/login', rateLimiter, userCtrl.login);
router.delete('/:id', userCtrl.delete);
router.put('/:id', auth, userCtrl.update);

module.exports = router;