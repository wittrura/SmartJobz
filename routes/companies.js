const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

const companies = require('../controllers/companies');

router.get('/', companies.all);
router.get('/:id', companies.get);
// TODO - add validation
// if invalid, return error
// on front end, if error, provide response and confirm that nothing was created
router.post('/', companies.create);
router.patch('/:id', companies.update);
router.delete('/:id', companies.destroy);

module.exports = router;
