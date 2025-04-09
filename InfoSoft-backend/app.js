const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const messageRoutes = require('./src/Routes/messageRoutes');
const applicationRoutes = require('./src/Routes/applicationRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', messageRoutes);
app.use('/api', applicationRoutes)
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
