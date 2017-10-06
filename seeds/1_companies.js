
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'HomeAway', notes: 'Recently announced new CTO, $10MM total funded'},
        {name: 'Main Street Hub', notes: 'Based in Austin'},
        {name: 'Duo Security', notes: 'Secruity firm'},
        {name: 'Conde Nast', notes: 'Dan DeGreef - engineer'},
        {name: 'BigCommerce', notes: 'Values work-life balance'}
      ]);
    });
};
