const express = require('express');

const { quotes } = require('../data');
const { getRandomElement, findPerson, filterByPerson } = require('../utils');

const qoutesRouter = express.Router();

qoutesRouter.get('/', (req, res, next) => {
  if (!req.query.person) {
    res.send({quotes: quotes});
  } else if(findPerson(quotes, req.query.person)) {
    const quotesByPerson = filterByPerson(quotes, req.query.person);
    res.send({quotes: quotesByPerson})
  } else {
    res.send({quotes: []});
  }
})

qoutesRouter.get('/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({quote: randomQuote});
})

module.exports = qoutesRouter;