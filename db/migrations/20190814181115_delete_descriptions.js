exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('burgers', table => table.dropColumn('description_2')),
    knex.schema.table('burgers', table => table.dropColumn('description'))
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('burgers', table => table.string('description_2', 2000))
  ]);
};
