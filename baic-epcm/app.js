var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var RedisStore = require('connect-redis')(expressSession); //redis存储session
var gu = require('guthrie-js');
var routesMap = require('./routes/routesMap');
var config = require('./config');

require('./core/extendError')();

var app = express();

//部署为线上环境
//app.set('env', 'production');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({ //redis存储session
  secret: config.redisSession.secret,
  resave: config.redisSession.resave,
  saveUninitialized: config.redisSession.saveUninitialized,
  store: new RedisStore({
    host: config.redisSession.host,
    port: config.redisSession.port,
    ttl: config.redisSession.ttl,
    pass: config.redisSession.pass,
    prefix: config.redisSession.prefix
  })
}));
app.use(express.static(path.join(__dirname, 'public')));

var router = new gu.Router(app, __dirname);

routesMap(router);

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
    res.status(err.status || 500);
    err.publish();
    res.render('error/index', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  err.publish();
  res.render('error/index', {
    message: err.message,
    error: {}
  });
});

module.exports = app;