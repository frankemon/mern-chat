const express = require('express');
const router = express.Router();
const { getPrivateRoute } = require('../controllers/private');
const { protect } = require('../middleware/auth');

router.route('/join').get(protect, getPrivateRoute);
router.route('/chat').get(protect, getPrivateRoute);
router.route('/users').get(protect, getPrivateRoute);

module.exports = router;
