const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// requiring Employee Models
require('./models/Employee');
require('./models/Performance');

// connecting mongoose with my own Mongo database
mongoose.connect('mongodb+srv://rahil:abcd123@cluster1-yknpd.mongodb.net/test?retryWrites=true');

// different routes for handling the request
require('./routes/authRoutes')(app);
require('./routes/adminRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // express will serve prod assests like js and css
    app.use(express.static('client/build'));

    // express will serve html if it doesn't recognise it
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
