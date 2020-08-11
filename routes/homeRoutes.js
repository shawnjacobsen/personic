const express = require('express');
const router = express.Router();
const connection = require('../config/database');
const passport = require('passport');
const homeController = require('../controllers/homeController');

// index
router.post('/', passport.authenticate('local'), homeController.home_get);

module.exports = router;
