const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Set up view engine for Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // Assuming your Pug file is `index.pug`
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
