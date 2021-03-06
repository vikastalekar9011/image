var mongoose = require('mongoose');

var mongoDB = process.env.DB_PATH;

mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;