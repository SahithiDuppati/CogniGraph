const axios = require('axios');

const getPrediction = async (data) => {
  const response = await axios.post('http://localhost:5000/predict', data);
  return response.data;
};

module.exports = { getPrediction };
