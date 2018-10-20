exports.up = function(knex, Promise) {
  return knex.schema.createTable('markers', function (table) {
    // increments creates a column named id with primary key constraints
    table.increments();
    // this column 'map_id' has a foreign key connected to users table
    table.integer('map_id').references('id').inTable('maps');
    // lat and lng for each marker. required.
    table.float('lat', 14, 10).notNullable();
    table.float('lng', 14, 10).notNullable();
    // to describe the marker
    table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('markers');
};
