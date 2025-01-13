const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(compression());

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
