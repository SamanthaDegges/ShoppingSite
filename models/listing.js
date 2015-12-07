var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var listingSchema =  Schema({
  // activeDate: {type: Date, required: true},
  // endDate: {type: Date, required: false},
  options: {type: Boolean, default: false, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  images: [{type: String}],
  quantity: Number,
  status: {type: String, default: 'archived', enum: ['archived', 'current', 'scheduled'], required: true},
  created: {type: Date, default: Date.now},
  category: [{type: String}],
  occasion: [{type: String}]
});

var listing = Mongoose.model('listing', listingSchema);

module.exports = listing;
