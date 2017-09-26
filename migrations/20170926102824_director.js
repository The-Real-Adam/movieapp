
exports.up = function(knex, Promise) {
  return knex.schema.createTable('director', function(table){
    table.increments()
    table.varchar('name', 255).notNullable()
    table.varchar('nationality', 255).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('director')

};
