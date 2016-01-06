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

router.post('/', upload.single("file"), function(req, res, next) {
  console.log('body is: ', req.body);
  console.log('file is: ', req.file);
  res.send(req.file);
});

// var upload = multer().single('avatar')
//
// router.post('/', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       console.log('error uploading.', err);
//       return;
//     }
//     // Everything went fine
//   })
// });

router.get('/', function(req, res) {
  console.log('get triggered for uploads.');
  //FIND AT S3
    res.send(err | found);
});

module.exports = router;
