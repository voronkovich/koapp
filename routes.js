'use strict';

const homepageController = require('./controllers/homepage');
const routing            = require('./components/routing');

const router = routing.createRouter();

router
    .get('/', homepageController.indexAction)
;

routing.addRouter(router);
