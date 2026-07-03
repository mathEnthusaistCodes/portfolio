const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const errorHandler = require('./middleware/errorHandler');

const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({ origin: env.clientUrl }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running' });
});

app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.use(errorHandler);

module.exports = app;
