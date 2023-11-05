// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const checkinRouter = require('./routes/checkin');
const remindersRouter = require('./routes/reminders');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routers for different features
app.use('/api/checkin', checkinRouter);
app.use('/api/reminders', remindersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
