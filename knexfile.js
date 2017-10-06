// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/smartjobz_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/smartjobz_test'
  }
};
