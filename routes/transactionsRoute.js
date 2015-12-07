"use strict"

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var router = require('express').Router()
var transaction = require('../models/transaction');
var listing = require('../models/listing');


router.get('/', function(req, res, next) {
  res.send('get works.');
  });

module.exports= router;
