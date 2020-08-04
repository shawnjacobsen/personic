const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.account_post);
router.get('/:id', accountController.account_details);
router.delete('/:id', accountController.account_delete);

module.exports = router;
