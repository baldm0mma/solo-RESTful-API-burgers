exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('burgers', table => {
      table.increments('id');
      table.string('name');
      table.string('description');
      table.string('image');
      table.integer('tastiness_level').unsigned();
      table.timestamps(true, true);
    }),
    knex.schema.createTable('ingredients', table => {
      table.increments('id');
      table.string('name');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('burger_ingredients', table => {
      table.increments('id');
      table.integer('burger_id').unsigned();
      table.foreign('burger_id').references('burgers.id');
      table.integer('ingredients_id').unsigned();
      table.foreign('ingredients_id').references('ingredients.id');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promis.all([
    knex.schema.dropTable('burgers'),
    knex.schema.dropTable('ingredients'),
    knex.schema.dropTable('burger_ingredients')
  ]);
};
