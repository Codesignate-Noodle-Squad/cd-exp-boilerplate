var Bookshelf = require('../../dbconnect');
var User = require('./model');

var Users = Bookshelf.Collection.extend({
    model: User
});

module.exports = Users;