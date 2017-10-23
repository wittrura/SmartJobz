
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, name: 'full stack experience', has_skill: true},
        {id: 2, name: 'NodeJS', has_skill: true},
        {id: 3, name: 'Angular', has_skill: true},
        {id: 4, name: 'test driven development', has_skill: true},
        {id: 5, name: 'critical thinking skills', has_skill: true},
        {id: 6, name: 'fast learner', has_skill: true},
        {id: 7, name: 'communication skills', has_skill: true},
        {id: 8, name: 'B2B SaaS experience', has_skill: false}
      ]);
    });
};
