if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const http = require('http');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const mongoose = require('mongoose');
const { createChatServer } = require('./chat/chatServer');

const app = express();

const cors = require('cors');

var corsOptions = {
  origin: '*',
};

// var corsOptions = {
//   origin: 'https://netlify.app goes here',
// };

app.use(cors(corsOptions));

// Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;

const { router, createRoutes } = require('./router');

// Get API data from body
app.use(express.json());

// Redirect via middleware
createRoutes(app);

// Custom error handler
app.use(errorHandler);

app.use(router);

const server = http.createServer(app);

createChatServer(server);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
