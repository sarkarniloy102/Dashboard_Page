const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path'); // Import path module

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');

// Explicitly set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(compression());

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
