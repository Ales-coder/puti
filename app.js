const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route for dynamic content
app.get('/', (req, res) => {
  res.render('index', { title: 'My Dynamic Website' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});