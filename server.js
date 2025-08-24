const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('./backend/routes/authRoutes'));
// app.use('/api/admin', require('./backend/routes/admin')); // if you have admin APIs



// ✅ Serve static files for frontend and admin
app.use('/', express.static(path.join(__dirname, 'frontend/build')));
app.use('/admin', express.static(path.join(__dirname, 'admin-dashboard/build')));

// ✅ React routing — two separate catch-alls using regex
// Admin dashboard
app.get(/^\/admin(\/.*)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-dashboard/build/index.html'));
});

// Frontend (everything except /admin)
app.get(/^\/(?!admin).*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
