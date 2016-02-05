
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary();
        t.string('first_name', 150).notNullable();
        t.string('last_name', 150).notNullable;
        t.string('email', 50).notNullable;
        t.string('gender', 1).notNullable;
        t.timestamps();
    });
};

exports.down = function(knex, Promise) {
  
};
