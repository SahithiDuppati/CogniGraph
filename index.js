const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Learning Knowledge Graph API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahithi:zd2n2YhuJaJZRezO@cognigraph.bj934.mongodb.net/?retryWrites=true&w=majority&appName=CogniGraph', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const axios = require('axios');

app.post('/predict', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error from Python API', error });
  }
});