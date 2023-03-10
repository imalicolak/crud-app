// npm init -y -> mkdir controllers models views -> touch .gitignore .env
//npm i express ejs mongoose dotenv 

// Step 1: Get the server running
const express =  require('express');
const app = express();

// Set PORT number
const PORT = 4000;

// Bringing in exports from music controller, simplifying file link for routing purposes. 
const musicController = require('./controllers/music.js')

// Set up View Engine to ejs
app.set('view engine', 'ejs');

// Connect to CSS & DOM manipulation. Use public folder, don't have to specify it's in public anymore
app.use(express.static('public'));

// app.use uses all of imports from music controller & base url is now localhost:4000/musicians when file is read
app.use('/music', musicController)

// Set generic home route & other routes. app.get is making a GET request
app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/submit', (req, res) => {
    res.render('submit');
});
app.get('/songs', (req, res) => {
    res.render('songList');
})
app.get('/*', (req, res) => {
    res.render('error')
});


//Listening on PORT
app.listen(PORT,  () =>{
    console.log('Server running on port ' + PORT);
});