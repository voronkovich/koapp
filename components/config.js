'use strict';

const merge = require('lodash').merge;
const path  = require('path');

const env  = process.env.NODE_ENV || 'development';
const root = path.join(__dirname, '/..');

const baseConfig = {
    app: {
        env: env,
        root: root,
        port: process.env.PORT || 3000,
    },
    mongoose:  {
        uri: 'mongodb://localhost/koapp',
        options: {}
    },
    swig: {
        root: root + '/views',
        autoescape: true,
        cache: 'memory',
        ext: 'html.twig'
    }
};

const envConfig = {
    development: {
        mongoose: {
            uri: baseConfig.mongoose.uri + '_dev'
        },
        swig: {
            cache: false,
        }
    },
    test: {
        mongoose: {
            uri: baseConfig.mongoose.uri + '_test'
        },
        swig: {
            cache: false,
        }
    }
}

module.exports = merge(baseConfig, envConfig[env] || {});
