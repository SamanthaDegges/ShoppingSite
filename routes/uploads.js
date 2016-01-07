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

router.post('/', function(req, res) {
  var uploadFile = upload.array('photos', 6);
  uploadFile(req, res, function (err) {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    var productImage = req.files[0];
    var newImage = new image(productImage);
    newImage.save(function(err, saved) {
      res.send(err || saved);
    })
  })
});

//ASSIGN IMAGES MAKES A PUT REQUEST FROM ADMINDASH CTRL
// router.put('/', function(req, res) {
//   image.findByIdAndUpdate(req.body,
// });

router.get('/', function(req, res) {
  console.log('get triggered for uploads.');
  //FIND AT S3
    res.send(err | found);
});

module.exports = router;
