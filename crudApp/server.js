// PreSetup -> npm install express, npm install ejs, npm install mongoose, npm install method-override. mkdir partials, pages, 

// 1) Require Express
const express = require('express');
const app = express();
// 7) Set path 
const path = require('path');
app.set('views', path.join(__dirname, '/views'))

// Controller Linking
const songSubmissionController = require('./controllers/songs')

// 8) Links to CSS JS routes
app.use(express.static(path.join(__dirname, '/public')));
// Parts of an express app
// console.log(app);

const PORT =  4000 ;

// 5) Set view engine to be ejs file
app.set('view engine', 'ejs');

// 6) in app.get, res.render the index.ejs file

// 3) NEW REQUEST everytime we hit a refresh on the browser in CONSOLE
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     res.send("You see me as a response to the request on the website!");
// });

// 4) .get to make links 

// /home => 'home'
// /submit => 'Submit a song'
// /ranked => 'Top Music of the Week' 

app.get('/', (req, res) => {
    // console.log("Home Page")
    res.render('index');
    res.send('Welcome Home')
})

app.get('/submit', (req, res) => {
    res.render('submit');
    res.send("Submit your favorite song")
    
})

app.get('/ranked', (req, res) => {
    res.render('ranked');
    res.send("Best songs of the week!")
})

app.get('*', (req, res) => {
    res.send('404')
})


// 2) Listening on PORT 4000
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});