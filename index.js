require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.error(`Error connecting to database: ${err.message}`));

app.get('/', (req, res) => {
    res.send('Customer Management System Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});