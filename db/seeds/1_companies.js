
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'HomeAway', notes: 'Recently announced new CTO, $10MM total funded'},
        {id: 2, name: 'Main Street Hub', notes: 'Based in Austin'},
        {id: 3, name: 'Duo Security', notes: 'Secruity firm'},
        {id: 4, name: 'Conde Nast', notes: 'Dan DeGreef - engineer'},
        {id: 5, name: 'BigCommerce', notes: 'Values work-life balance'},
        {id: 6, name: 'Modernize', notes: 'Connects people seeking contractors for home improvements'}
      ]);
    });
};
