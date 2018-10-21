exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    // increments creates a column named id and primary key constraints
    table.increments();
    // this creates a column named ('user_name'), not nullable
    table.string('user_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};