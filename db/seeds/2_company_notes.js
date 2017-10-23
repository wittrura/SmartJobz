
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company_notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('company_notes').insert([
        {id: 1, notes: 'Recently announced new CTO, $10MM total funded', company_id: 1},
        {id: 2, notes: 'Based in Austin', company_id: 2},
        {id: 3, notes: 'Secruity firm', company_id: 3},
        {id: 4, notes: 'Multimedia company', company_id: 4},
        {id: 5, notes: 'Values work-life balance', company_id: 5}
      ]);
    });
};
