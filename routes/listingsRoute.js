"use strict"

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var router = require('express').Router();
var bodyParser = require('body-parser');
var listing = require('../models/listing');
var transaction = require('../models/transaction');

router.get('/', function(req, res) {
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

router.put('/:listingId', function(req, res, next) {
  listing.findByIdAndUpdate(req.params.listingId, req.body, function(err, updated) {
    if (err || !updated) {
      return res.status(404).send(err || "Update unsuccessful: listing not found.");
    }

    updated.save(function(err, saved) {
      res.send(err || saved);
    });
  });
});

router.delete('/:listingId', function(req, res, next) {
  // res.send('delete works.', req.params.listingId);
  listing.findByIdAndRemove(req.params.listingId, function(err, deleted) {
    console.log(err);
    if (err || !deleted) {
      res.status(404).send(err || "Delete unsuccessful: Item not found.")
    } else {
      res.send('completed deletion of: ', deleted);
    }
  })
});

module.exports = router;
