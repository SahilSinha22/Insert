const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const recordRoutes = require('./routes/recordRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/records', recordRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
