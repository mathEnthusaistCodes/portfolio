const mongoose = require('mongoose');
const env = require('./env');

const connectDB = async () => {
  if (env.nodeEnv === 'test') return;

  try {
    await mongoose.connect(env.mongoUri);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
