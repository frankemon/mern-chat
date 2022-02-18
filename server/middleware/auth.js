const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
  let token;

  // Checks if data from headers contains the term "Bearer", then splits into two seperate arrays
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Checks if either token or user can be verified before calling next() and allowing user to view private routes
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

    // JWT verify function decodes the ID from getSignedToken function on User model
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse('No user matching ID', 404));
    }

    // Sets user data to request object
    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
};
