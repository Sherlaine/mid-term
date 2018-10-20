exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, user_name: 'Linda'}),
        knex('users').insert({id: 2, user_name: 'Janet'}),
        knex('users').insert({id: 3, user_name: 'Cliff'}),
        knex('users').insert({id: 4, user_name: 'Edna'})
      ]);
    });
};
