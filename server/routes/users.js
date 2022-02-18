const express = require('express');
const router = express.Router();

const users = require('../controllers/users');

// Endpoints
router.get('/', users.all);
router.put('/:id', users.update);
router.delete('/:id', users.delete);

module.exports = router;
