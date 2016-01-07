var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var imageSchema =  Schema({
  fieldname: String,
  originalName: String,
  encoding: String,
  mimetype: String,
  size: Number,
  key: String,
  listing: {type: Schema.Types.ObjectId, ref: 'listing'}
});

var image = Mongoose.model('image', imageSchema);

module.exports = image;
