require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const conceptRoutes = require('./routes/conceptRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/concepts', conceptRoutes);
app.use('/api/resources', resourceRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
