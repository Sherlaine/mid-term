exports.up = function(knex, Promise) {
  return knex.schema.createTable('favourites', function (table) {
    // increments creates a column named id with primary key constraints
    table.increments();
    // this column 'map_id' has a foreign key connected to users table
    table.integer('map_id').references('id').inTable('maps');
    // this column 'user_id' has a foreign key connected to users table
    table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favourites');
};
