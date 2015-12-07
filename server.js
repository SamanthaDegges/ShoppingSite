var Mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/transactions', require('./routes/transactionsRoute'));
app.use('/', require('./routes/listingsRoute'));

//Mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/shoppingSite');

Mongoose.connect('mongodb://localhost/shoppingSite');

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
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

app.listen(3000);
