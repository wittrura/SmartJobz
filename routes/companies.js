const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('companies')
    .orderBy('id')
    .then((companies) => {
      res.status(200).json({data: companies});
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/:id', (req, res, next) => {
  let id = req.params.id;
  let updatedCompany = req.body;
  knex('companies')
    .where({id: id})
    .first()
    .then((company) => {
      if (!company) {
        return next();
      }
      return knex('companies').where({ id: id }).update(updatedCompany, '*');
    })
    .then((company) => {
      res.status(200).json({data: company[0]});
    })
    .catch((err) => {
      next(err);
    });
})

module.exports = router;
