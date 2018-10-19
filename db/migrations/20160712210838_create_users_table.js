exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('user_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
