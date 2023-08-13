const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// start server only when mongo connects


mongoose.connect('mongodb://127.0.0.1:27017/populate_demo')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes

app.use('/', require('./routes/route'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});



