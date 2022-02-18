const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    // Checks that user puts in valid email address using regular expression
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    // Set to false so password is not returned
    select: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hash passwords via middleware using pre, hash and salt BEFORE password is saved to DB
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password found on selected UserSchema in auth.js login function
UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Get id from selected UserSchema in auth.js register function, set bearer token and set expire time
UserSchema.methods.getSignedToken = function () {
  // return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, {
  //   expiresIn: `${process.env.JWT_EXPIRE}`,
  // });
  return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, {
    expiresIn: `${process.env.JWT_EXPIRE}`,
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
