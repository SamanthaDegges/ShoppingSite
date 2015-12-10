var Mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var app = express();
var stormpath = require('express-stormpath');

app.set('views', path.join(__dirname, 'views'));

app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(stormpath.init(app, {
  // Optional configuration options.
  website: true,
  application: {href: process.env.STORMPATH_URL},
  spaRoot: path.join(__dirname, 'public', 'index.html') //,
  // web: {
  //   login: {
  //     enabled: true,
  //     nextUri: "/#/adminDash"
  //   }
  // }
  })
);

app.use('/transactions', require('./routes/transactionsRoute'));
app.use('/listings', require('./routes/listingsRoute'));

Mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/shoppingSite');

// Mongoose.connect('mongodb://localhost/shoppingSite');

app.get('/', function(req, res) {
  var index = path.join(__dirname, 'public');
  var html = fs.readFileSync(index, 'utf8');
  console.log(html);
  fs.readFile(index, 'utf8', function(err, data) {
    res.send(data);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(status || 500).send('production error handler fired.');
});

module.exports = app;

// Once Stormpath has initialized itself, start your web server!
app.on('stormpath.ready', function () {
  app.listen(process.env.PORT || 3000);
});
