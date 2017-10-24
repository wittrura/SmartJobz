const db = require('../db/knex');

const ResourceFactory = table => ({
  all() {
    return db(table)
  },

  get(id) {
    return db(table).where('id', id).first()
  },

  create(newData) {
    return db(table).insert(newData).returning('*')
  },

  update(id, updatedData) {
    return db(table).where('id', id).first().update(updatedData, '*')
  },

  destroy(id) {
    return db(table).where('id', id).first().del()
  }
});

module.exports = ResourceFactory;
