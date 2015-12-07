var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var transactionSchema =  Schema({
  submitDate: {type: Date, required: true},
  item: {type: Mongoose.Schema.ObjectId},
  price: {type: Number, required: true},
  images: [{type: Mongoose.Schema.ObjectId}],
  status: {type: String, default: 'open', enum: ['closed', 'open', 'processing'], required: true},
  customerName: String
});

var transaction = Mongoose.model('transaction', transactionSchema);

module.exports = transaction;
