const mongoose = require('mongoose');

const connectDb = async () => {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('MongoDB connected');
};

module.exports = connectDb;
