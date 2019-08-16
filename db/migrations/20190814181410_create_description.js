exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('burgers', table => table.string('description', 3000))
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('burgers', table => table.dropColumn('description'))
  ]);
};
