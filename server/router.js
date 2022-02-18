const express = require('express');
const router = express.Router();

// Endpoints
exports.createRoutes = (app) => {
  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/private', require('./routes/private'));
  app.use('/api/users', require('./routes/users'));
};

exports.router = router;
