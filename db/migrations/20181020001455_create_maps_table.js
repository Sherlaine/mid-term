exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    // increments creates a column named id with primary key constraints
    table.increments();
    // this column 'user_id' has a foreign key connected to users table
    table.integer('user_id').references('id').inTable('users');
    // this column 'title' is for the title of each map. required.
    table.string('title').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
