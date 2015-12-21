"use strict"

var router = require('express').Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads' });

router.post('/', upload.single('file'), function(req, res, next) {
  console.log('body is: ', req.body);
  console.log('file is: ', req.file);
  res.send(req.file);
});

router.get('/', function(req, res) {
  console.log('get triggered for uploads.');
  //FIND AT S3
    res.send(err | found);
});

module.exports = router;



// app.post('/uploads', upload.fields('itemImages', [
//   { name: 'featured', maxCount: 1 },
//   { name: 'gallery', maxCount: 8 }
// ]), function (req, res, next) {
//   console.log('singleFile to upload is: ', req.file, 'text body is: ', req.body);
// });

// var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })

//
// router.post('/', upload.single('photo'), function(req, res, next) {
//   Photo.upload(req.file, function(err, photo){
//     console.log(err || photo);
//     res.redirect('/#/photos');
//   });
// });
//
// router.get('/', function(req,res) {
//   Photo.find({}, function(err, photos) {
//     res.status(err ? 400 : 200).send(err || photos);
//   });
// });
