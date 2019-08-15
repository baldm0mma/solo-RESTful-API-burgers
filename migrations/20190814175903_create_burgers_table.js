exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('burgers', table => table.string('description_2', 2000))
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('burgers', table => table.string('description'))
  ]);
};
