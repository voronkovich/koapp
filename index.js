'use strict';

const app     = require('koa')();
const config  = require('./components/config');
const db      = require('./components/db');
const render  = require('./components/render');
const routing = require('./components/routing');
const serve   = require('koa-static');

app.env = config.app.env;

app.context.config  = config;
app.context.db      = db;
app.context.render  = render;
app.context.routing = routing;

// Middleware
app.use(serve(config.app.root + '/public'));

// Loading routes
require('./routes.js');
app.context.routing.routes().forEach(routes => app.use(routes));

app.listen(config.app.port);
