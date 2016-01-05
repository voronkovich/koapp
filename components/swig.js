'use strict';

const config = require('./config').swig;
const swig   = require('koa-swig');

module.exports = swig(config);
