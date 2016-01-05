'use strict';

require('../models/post');
require('../models/user');

module.exports.indexAction = function* indexAction() {
    let posts = yield this.db.model('Post')
        .find()
        .populate('author')
    ;

    yield this.render('homepage/posts', { posts: posts });
}
