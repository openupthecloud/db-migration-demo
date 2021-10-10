
exports.up = function(knex) {
    knex.schema.createTable('users', function (table) {
    table.increments('userId');
    table.string('name');
  });
};

exports.down = function(knex) {
    knex.schema.dropTable('users')
};
