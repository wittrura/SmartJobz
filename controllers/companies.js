const knex = require('../db/knex');
const Company = require('../models/company');

const all = (req, res, next) => {
  Company.all()
    .then(companies => res.status(200).json({data: companies}))
    .catch(err => nex(err));
};

const get = (req, res, next) => {
  Company.get(req.params.id)
    .then(company => res.status(200).json({data: company}))
    .catch(err => next(err));
};

const create = (req, res, next) => {
  Company.create(req.body)
    .then(company => res.status(200).json({data: company[0]}))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  Company.update(req.params.id, req.body)
    .then(company => res.status(200).json({data: company[0]}))
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  Company.destroy(req.params.id)
    .then(company => res.status(204).send())
    .catch(err => next(err));
};

module.exports = {
  all, get, create, update, destroy
};
