const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const admitCardRoutes = require('./routes/admitCardRoutes'); // Import the admit card routes
const jobListingRoutes = require('./routes/jobListings');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use('/api/jobListings', jobListingRoutes);
// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/admitcards', admitCardRoutes); // Use the admit card routes

// MongoDB Connection
mongoose.connect('mongodb+srv://harishkumawatkumawat669:7FiBpE7v7lNyDp6G@cluster0.ogeix.mongodb.net/jobDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Start server
const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
