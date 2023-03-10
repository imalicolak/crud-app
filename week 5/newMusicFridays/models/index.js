// Run the connection through the database
require('../config/connection');

module.exports = {
    songs: require('./songs')
    // songs: require('/songs')
}