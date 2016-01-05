'use strict';

const _      = require('lodash');
const root   = require('./config').app.root;
const router = require('koa-router');

const routing = {
    routers: [],

    createRouter(options) {
        return router(options);
    },

    addRouter(router) {
        this.routers.push(router);
    },

    routes() {
        return this.routers.map(router => router.routes());
    },

    url(name, params) {
        let router = _.first(this.routers, router => router.route(name));

        if (!router) {
            throw new Error('No route found for name: ' + name);
        }

        return route.url(name, params);
    }
};

module.exports = routing;
