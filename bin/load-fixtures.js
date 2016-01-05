'use strict';

const db       = require('../components/db');
const fixtures = require('pow-mongoose-fixtures');
const root     = require('../components/config').app.root;

fixtures.load(root + '/models/fixtures', db, function(error) {
    if (error) {
        console.log(error.message);
    } else {
        console.log('Fixtures loaded successfully!');
    }

    process.exit();
});
