
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {id: 1, name: 'Steven Spielberg', nationality: 'American'},
        {id: 2, name: 'Quentin Tarantino', nationality: 'American'},
        {id: 3, name: 'James Cameron', nationality: 'Canadian'}

      ]);
    });
};
