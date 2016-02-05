
exports.up = function(knex, Promise) {
    knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('users', function (t) {
                t.increments('id').primary();
                t.string('first_name', 150);
                t.string('last_name', 150);
                t.string('email', 50);
                t.string('gender', 1);
                t.timestamps();
            });
        }
    });
};

exports.down = function(knex, Promise) {
    
};
