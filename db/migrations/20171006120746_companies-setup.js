
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('notes').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.dropTable('companies');
};
