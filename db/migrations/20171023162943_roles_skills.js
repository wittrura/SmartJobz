
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles_skills', (table) => {
    table.increments();
    table.integer('skill_id')
      .notNullable()
      .references('id')
      .inTable('skills')
      .onDelete('CASCADE');
    table.integer('role_id')
      .notNullable()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('roles_skills');
};
