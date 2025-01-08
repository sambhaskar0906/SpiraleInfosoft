const express = require('express');
const { createMessage } = require('../Controller/MessageController');
const router = express.Router();

// POST route to handle form submissions
router.post('/messages', createMessage);

module.exports = router;
