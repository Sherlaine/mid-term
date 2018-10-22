exports.seed = function (knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return knex('maps').del()
    })
    .then(function () {
      return knex('users').del()
    })
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          user_name: 'Linda'
        }),
        knex('users').insert({
          id: 2,
          user_name: 'Janet'
        }),
        knex('users').insert({
          id: 3,
          user_name: 'Cliff'
        }),
        knex('users').insert({
          id: 4,
          user_name: 'Edna'
        })
      ]);
    })
    .then(function () {
      return Promise.all([
        knex('maps').insert({
          id: 1,
          user_id: 1,
          title: 'Dumpster Heaven'
        })
      ]);
    })
    .then(function (maps) {
      return knex('markers').insert({
        id: 1,
        map_id: 1,
        lat: 49.246292,
        lng: -123.116226
      })
    })
};
