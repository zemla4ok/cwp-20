const express = require('express');
const router = express.Router();
const db = require('../db');

db.country.findAll().then((res)=>{
    console.log(res);
})