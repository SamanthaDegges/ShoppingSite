"use strict"

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var router = require('express').Router()


router.get('/', function(req, res, next) {
  res.send('get works.');
  });

module.exports= router;
