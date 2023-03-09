// npm init -y -> mkdir controllers models views -> touch .gitignore .env

// Step 1: Get the server running
const express =  require('express');
const app = express();

// Set PORT number
const PORT = 4000;

// Bringing in exports from music controller, simplifying file link for routing purposes. 
const musicController = require('./controllers/music')

// Set up View Engine to ejs
app.set('view engine', 'ejs');

// Set generic home route & other routes
app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/submit', (req, res) => {
    res.render('submit');
});
app.get('/*', (req, res) => {
    res.render('error')
});


//Listening on PORT
app.listen(PORT,  () =>{
    console.log('Server running on port ' + PORT);
});