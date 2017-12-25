const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/countries', async (req, res, next) => {
    console.log("ze");
})

module.exports = router;