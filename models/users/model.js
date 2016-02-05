var Bookshelf = require('../../dbconnect');

var User = Bookshelf.Model.extend({
    tableName: 'users',

    hasTimestamps: true
});

module.exports = User;