// What data do we need for a song? 

// Song Name, Artist Name, Song Category, Date Added, Song Rating

const mongoose = require('mongoose');

// Schema Object for Database
const songSubmitSchema = new mongoose.Schema(
{
    songName:{
        type: String,
        required: [true, "Please type in the Song's Name"]
    }, 
    artistName: {
        type: String,
        required: [true, "Please type in the Artist's Name"]
    }, 
    songCategory: {
        type: String,
        required: [true, "Please type in the Song's Category"]
    }, 
    dateAdded: {
        type: String,
        required: [true, "Please type in the Friday Released"]
    }, 
    songRating: {
        type: 'number',
        required: [true, "Please type in the Song's Rating"]
    }, 
},
    {
        timestamps: true
    }
);

const songs = mongoose.model('songs', songSubmitSchema);

module.exports = songs;