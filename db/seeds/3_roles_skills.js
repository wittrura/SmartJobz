
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles_skills').insert([
        {id: 1, skill_id: 1, role_id: 3},
        {id: 2, skill_id: 2, role_id: 4},
        {id: 3, skill_id: 3, role_id: 1},
        {id: 4, skill_id: 4, role_id: 2},
        {id: 5, skill_id: 5, role_id: 3},
        {id: 6, skill_id: 2, role_id: 4},
        {id: 7, skill_id: 1, role_id: 5},
        {id: 8, skill_id: 8, role_id: 1},
        {id: 9, skill_id: 7, role_id: 3},
        {id: 10, skill_id: 6, role_id: 2},
        {id: 11, skill_id: 1, role_id: 5},
      ]);
    });
};
