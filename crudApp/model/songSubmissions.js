const mongoose = require('mongoose');

const songSubmit = new mongoose.Schema(
{
    songName: String,
    songArtist: String,
    releaseYear: String
})
const songSubmit = mongoose.model('superCarCollection', supercarSchema);

module.exports = Supercar