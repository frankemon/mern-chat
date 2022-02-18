const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// Get all users
exports.all = (req, res) => {
  try {
    User.find().then((users) => {
      res.send(users);
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update user
exports.update = (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndUpdate(id, req.body).then((user) => {
      res.json(user);
    });
  } catch (error) {
    res.status(403).send(error);
  }
};

// Delete user
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      } else {
        res.send({
          message: 'User was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      });
    });
};
