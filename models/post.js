'use strict';

const db = require('../components/db');

const schema = new db.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    content: {
        type: String,
        required: true,
        maxLength: 1000
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    author: {
        type: Number,
        ref: 'User'
    }
});

module.exports = {
    schema: schema,
    model:  db.model('Post', schema)
};
