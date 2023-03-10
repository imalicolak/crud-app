// Router is what we use in controllers to route -> easy to export all of the routes in the file
// Router instead of app for controllers always 
const express = require('express');
const router  = express.Router();

// Getting songs from models/songs
const {songs} = require('../models')

router.get('/', async (req, res, next) => {
    try {
        const mySongs = await songs.find({});
        console.log(mySongs);
        res.render('index.ejs ')
        const context = {
            songs: mySongs
        }
        res.render('songList.ejs')
    } 
    catch(error){
        console.log(error);
        return next();
    }
    
})
router.get('/new', (req, res) => {
    res.render('newEditDeleteAll/edit.ejs')
}); 

router.post('/abc', async (req, res, next) => {
    try {
        const newSong = song.create(req.body);
        console.log(newSong);
        console.log(req.body);
        // const myNewSong = await songs.create(req.body);
        // console.log(myNewSong);
        res.redirect('/')
    } catch(error){
        console.log(error);
        return next();
    }
})


module.exports = router;