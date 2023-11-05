const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (assuming you've created a database file named 'myapp.db')
const db = new sqlite3.Database('myapp.db');

// Handle POST requests to /api/checkin
router.post('/', (req, res) => {
  const checkinData = req.body; // Access the check-in data from the request body

  // Validate and sanitize the check-in data (add your validation logic here)
  // For example, ensure required fields are present and data is in the correct format

  // Store the check-in data in the database
  db.run(
    'INSERT INTO checkins (user_id, mood, feelings) VALUES (?, ?, ?)',
    [checkinData.user_id, checkinData.mood, checkinData.feelings],
    (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Failed to save check-in data' });
      }
      // If the data is successfully saved, respond with a success message
      res.status(200).json({ message: 'Check-in saved successfully' });
    }
  );
});

module.exports = router;
