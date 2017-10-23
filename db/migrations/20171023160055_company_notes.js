
exports.up = function(knex, Promise) {
  return knex.schema.createTable('company_notes', (table) => {
    table.increments();
    table.integer('company_id')
      .notNullable()
      .references('id')
      .inTable('companies')
      .onDelete('CASCADE');
    table.text('notes').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company_notes');
};
