'use strict';

const db = require('../components/db');

const schema = new db.Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 256,
        match: /@/
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = {
    schema: schema,
    model:  db.model('User', schema)
};
