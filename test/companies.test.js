process.env.NODE_ENV = 'test';
process.env.PORT = 3000;

const server = require('../server');
const request = require('supertest')(server);
const expect = require('chai').expect;

const seed = require("../seeds/1_companies").seed;

const knex = require('../db/knex');


describe("tests connected", function() {
  it('returns true', function() {
    expect(true).to.equal(true);
  });
});

describe('GET /api/companies', function() {
  it('respond with json', function(done) {
    request.get('/api/companies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
