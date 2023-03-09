// npm init -y -> mkdir controllers models views -> touch .gitignore .env

// Step 1: Get the server running
const express =  require('express');
const app = express();

// Set PORT number
const PORT = 4000;

// Bringing in exports from music controller, simplifying file link for routing purposes. 
const musicController = require('./controllers/music')

app.listen(PORT,  () =>{
    console.log('Server running on port ' + PORT);
});