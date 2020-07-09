const express = require('express');

const router = express.Router();

const userRequest = require ('../request/request');
const userQuote = require ('../request/quote');

router.get('/product', userRequest.product);
router.post('/quote', userQuote.quote);
router.post('/contact', userQuote.contact);

module.exports = router;