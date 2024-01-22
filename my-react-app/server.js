const express = require('express');
const { client, connect } = require('./db'); // Import from db.js
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to Cosmos DB
connect();

// Test route
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});

// Route to fetch lessons
app.get('/api/lessons', async (req, res) => {
  try {
    const collection = client.db('your-db-name').collection('lessons');
    const lessons = await collection.find({}).toArray();
    res.json(lessons);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// ... other endpoints ...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
