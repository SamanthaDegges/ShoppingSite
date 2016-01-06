"use strict"

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
var uploadFile = upload.array('photos', 6);

router.post('/', function(req, res) {
  uploadFile(req, res, function (err) {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log('Body is: ', req.body);
    console.log('File is: ', req.files);
    res.send(req.files);
  })
});



router.get('/', function(req, res) {
  console.log('get triggered for uploads.');
  //FIND AT S3
    res.send(err | found);
});

module.exports = router;
