"use strict"

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var router = require('express').Router();
var bodyParser = require('body-parser');
var listing = require('../models/listing');

router.get('/', function(req, res, next) {
  listing.find({}, function(err, found) {
    res.send(err || found);
  });
});

router.post('/', function(req, res, next) {
  var newListing = new listing(req.body);
  newListing.save(function(err, saved) {
    res.send(err || saved);
  });
});

router.put('/', function(req, res, next) {
  res.send('put works.');
});

router.delete('/', function(req, res, next) {
  res.send('delete works.');
});

module.exports = router;


//
// activeDate: {type: Date, required: true},
// endDate: {type: Date, required: false},
// options: {type: Boolean, default: false, required: true},
// title: {type: String, required: true},
// description: {type: String, required: true},
// price: {type: Number, required: true},
// images: [type: String],
// quantity: Number,
// status: {type: String, default: 'archived', enum: ['archived', 'current', 'scheduled'], required: true},
// created: {type: Date, default: Date.now},
// category: [type: String],
// occasion: [type: String]
