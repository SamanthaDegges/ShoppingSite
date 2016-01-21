"use strict"
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var listing = require('../models/listing');
var image = require('../models/image');
var bodyParser = require('body-parser');
var multer = require('multer');
var s3 = require('multer-s3');
var upload = multer({
  storage: s3({
    dirname: 'images/product-images',
    bucket: process.env.S3_BUCKET,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: 'us-west-1',
    filename: function (req, file, cb) {
      cb(null, Date.now())
    }
  })
});
var router = require('express').Router();

router.post('/', function(req, res, next) {
  var uploadFile = upload.array('photos', 6);
  uploadFile(req, res, function (err) {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    var productImage = req.files[0];
    console.log('productImage is: ', productImage);
    var newImage = new image(productImage);
    newImage.save(function(err, saved) {
      if (err) {
        console.log('Saving to DB unsuccessful.');
        return;
      }
      else {
        console.log('going to send this: ', saved);
        res.send(saved);
      }
    });
  });
});

router.get('/', function(req, res) {
  console.log('get triggered for uploads.');
  //FIND AT S3
    res.send(err | found);
});

module.exports = router;
