const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000; // Choose a port for your server

// Set up the proxy endpoint
app.get('/api/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const apiUrl = `https://eodhistoricaldata.com/api/search/${query}?api_token=64c9ea8eaef542.32178852`;

    // Forward the request to the target API using axios
    const response = await axios.get(apiUrl);

    // Return the API response back to the frontend
    return res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});