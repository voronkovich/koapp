'use strict';

const config   = require('./config').mongoose;
const mongoose = require('mongoose');

mongoose.connection.on('error', function(errror) {
    console.log('Mongoose connection error: ' + error);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});

process.on('SIGINT', function() {
    connection.close(function() {
        console.log('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});

mongoose.connect(config.uri, config.options);

module.exports = mongoose;
