
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, first_name: 'David', last_name: 'Bondy', email: '', phone: '555-123-4567'},
        {id: 2, first_name: 'Dan', last_name: 'DeGreef', email: 'ddegreef@email.com', phone: ''},
        {id: 3, first_name: 'Brittany', last_name: 'Cutright', email: 'bcutty@email.com', phone: '440-123-4567'},
        {id: 4, first_name: 'Matt', last_name: 'McNamara', email: 'mmcnamara@email.com', phone: '419-555-5555'}
      ]);
    });
};
