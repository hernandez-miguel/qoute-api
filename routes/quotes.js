const express = require('express');

const { quotes } = require('../data');
const { getRandomElement, findPerson, filterByPerson } = require('../utils');

const quotesRouter = express.Router();

quotesRouter.get('/', (req, res, next) => {
  if (!req.query.person) {
    res.send({quotes: quotes});
  } else if(findPerson(quotes, req.query.person)) {
    const quotesByPerson = filterByPerson(quotes, req.query.person);
    res.send({quotes: quotesByPerson})
  } else {
    res.send({quotes: []});
  }
})

quotesRouter.get('/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({quote: randomQuote});
})

quotesRouter.post('/', (req, res, next) => {
  if (req.query.quote && req.query.person) {
    quotes.push(req.query);
    res.send({quote: req.query});
  }
})

module.exports = quotesRouter;