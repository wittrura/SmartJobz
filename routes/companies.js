const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('companies')
    .then((companies) => {
      res.status(200).json({data: companies});
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
