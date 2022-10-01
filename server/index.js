const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Instantiate express
const app = express();

app.use(express.json());

app.use(cors());

// Initialize routes middleware
app.use('/api/users', require('./routes/users'));

// Use express's default error handling middleware
app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
    res.status(400).json({ err: err });
});

// Start the server
const port = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;

// Connect to the database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => {
        console.log(`Server Started Successfully on PORT ${port}`);
    });
}).catch(err => {
    console.log(err);
});
