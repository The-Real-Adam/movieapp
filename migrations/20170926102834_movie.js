
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table){
    table.increments()
    table.varchar('title', 255).notNullable()
    table.integer('year').notNullable()
    table.integer('director_id').notNullable().references('id').inTable('director').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie')

};
