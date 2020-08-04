const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.event_post);
router.get('/:id', eventController.event_details);
router.delete('/:id', eventController.event_delete);

module.exports = router;
