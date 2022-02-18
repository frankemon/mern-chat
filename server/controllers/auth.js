const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// Functions being exported
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse('Login credentials required', 400));
  }

  // Returns a user with all data to compare password for login
  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return next(new ErrorResponse('Invalid user credentials', 401));
    }

    // Runs match function from User model
    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse('Invalid user credentials', 401));
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.logout = (req, res, next) => {
  res.send('Logout route');
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
    username: user.username,
    isAdmin: user.isAdmin,
  });
};
