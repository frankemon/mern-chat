const ErrorResponse = require("../utils/errorResponse");

// Custom error handling
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  if (err.code === 11000) {
    const message = `Duplicate Field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // Create new array of error values with the messages
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  // Set error field to error message
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
