
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skills', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.boolean('has_skill').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('skills');
};
