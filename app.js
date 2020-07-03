// Imported packages for main project

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

// const mongoose = require('mongoose');
// const passport = require('passport');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const connectDB = require('./config/db');

// Creating Express App
const app = express();

// Dotenv enrionment variable configuration
dotenv.config({ path: './config/config.env' });

// Morgan Logger for requests
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars Helper Functions - Code Fragments
const { formatDate, stripTags, truncate, editIcon } = require('./helpers/hbs');

// Handlebars Templating Enging
app.engine(
    '.hbs',
    exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        helpers: { formatDate, stripTags, truncate, editIcon }
    })
);
app.set('view engine', '.hbs');

// Routes
app.use('/', require('./routes/index'));
app.use('/external', require('./routes/external'));

// App is set up and we can begin listening!
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
