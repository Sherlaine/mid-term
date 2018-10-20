exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {


  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
