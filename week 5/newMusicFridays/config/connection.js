// Mongoose Configuration
require('dotenv').config();

// How you get PRIVATE CODE READ
const connectionString = (process.env.MONGO_DB_URI) ;


const mongoose = require('mongoose');

//Name of created Mongo DataBase
mongoose.connect(connectionString) 

// Successful Connection
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - Mongoose connected to MongoDB`);
});

// MongoDB connection on Error
mongoose.connection.on('error', (error) => {
    console.log(`Mongoose connection error: ${error}`);
});

// Disconnecting from MongoDB
mongoose.connection.on('disconnected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - Mongoose disconnected from MongoDB`);
});




