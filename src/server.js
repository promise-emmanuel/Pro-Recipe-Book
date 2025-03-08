const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the static directory
app.use(express.static('static'));


// In-memory storage for recipes
const recipes = [];

// Route to display the list of recipes
app.get('/', (req, res) => {
  res.render('index', { recipes });
});

// Route to show the form to add a new recipe
app.get('/new', (req, res) => {
  res.render('new');
});

// Route to handle recipe submissions
app.post('/recipes', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  recipes.push({ title, ingredients, instructions });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});