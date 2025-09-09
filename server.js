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
// app.use('/api/admin', require('./backend/routes/admin'));

// ✅ Serve static files for loginKashi and admin
app.use('/', express.static(path.join(__dirname, 'loginKashi/build')));
app.use('/admin', express.static(path.join(__dirname, 'admin-dashboard/build')));

// ✅ React routing
app.get(/^\/admin(\/.*)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-dashboard/build/index.html'));
});
app.get(/^\/(?!admin).*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'loginKashi/build/index.html'));
});

// MongoDB connection + start server
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB Connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
    console.error('❌ MongoDB Connection Failed:', err.message);
})


mongoose.connection.on('connected', () => {
  console.log('Mongoose event: connected');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose event: error →', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose event: disconnected');
});
