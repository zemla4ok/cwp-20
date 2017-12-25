const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async function (req, res, next) {
    res.render('index', {
        countriesCount: 10,//await db.countries.countAll(),
        citiesCount: 5});//await db.cities.countAll()});
});

module.exports = router;