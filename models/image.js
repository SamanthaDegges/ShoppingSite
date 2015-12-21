var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var imageSchema =  Schema({
  name: String,
  url: {type: String},
  file: {type: String}, //, required: true
  caption: {type: String}
});

var image = Mongoose.model('image', imageSchema);

module.exports = image;
