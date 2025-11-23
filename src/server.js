require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// sample protected route
const authMiddleware = require('./middleware/auth');
app.get('/api/profile', authMiddleware, async (req, res) => {
  // req.user set by middleware
  res.json({ message: 'Protected profile', user: req.user });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});
