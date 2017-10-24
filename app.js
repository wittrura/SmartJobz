var express = require('express');
// var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const companies = require('./routes/companies');
const contacts = require('./routes/contacts');

var app = express();


// enable CORS for development
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  // define allowable methods - PATCH is not allowed by default
  res.header("Access-Control-Allow-Methods", 'GET, POST, DELETE, PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/companies', companies);
app.use('/api/contacts', contacts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
module.exports = app;
