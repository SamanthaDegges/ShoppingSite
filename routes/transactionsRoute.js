"use strict"

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var router = require('express').Router()
var transaction = require('../models/transaction');
var listing = require('../models/listing');

// LOAD TRANSACTIONS FOR ADMIN DASHBOARD
router.get('/', function(req, res, next) {
  transaction.find({}, function(err, found) {
    res.send(err || found);
  })
});

// SHOPPER MAKES PURCHASE OR RETURN
router.post('/', function(req, res) {
  var newTransaction = new transaction(req.body);
  newTransaction.save(function(err, saved) {
    res.send(err || saved);
  });
});

// ADMIN EDITS TRANSACTION
router.put('/:transactionId', function(req, res) {
  transaction.findByIdAndUpdate(req.params.transactionId, req.body, function(err, updated) {
    if (err || !updated) {
      return res.status(404).send(err || "Update unsuccessful: transaction not found in database.");
    }

    updated.save(function(err, saved) {
      res.send(err || saved);
    });
  });
});

// FOR ADMIN TO REMOVE DEFUNCT TRANSACTIONS
router.delete('/:transactionId', function(req, res) {
  transaction.findByIdAndRemove(req.params.transactionId, function(err, deleted) {
    res.send(err || deleted);
  });
});

module.exports= router;
