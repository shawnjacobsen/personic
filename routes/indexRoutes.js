const express = require('express');
const router = express.Router();
const genPassword = require('../lib/passwordUtils').genPassword;
const connection = require('../config/database');
const Account = connection.models.Account;
const passport = require('passport');
const indexController = require('../controllers/indexController');

// login
router.post('/login', passport.authenticate('local'), indexController.account_login_post);

// register route
router.post('/register', indexController.account_register_post);

module.exports = router;
