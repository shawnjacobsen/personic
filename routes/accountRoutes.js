const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/:id', accountController.account_details);
router.delete('/:id', accountController.account_delete);

module.exports = router;
