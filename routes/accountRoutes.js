const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/:id', accountController.account_details);
