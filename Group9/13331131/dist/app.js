// Generated by LiveScript 1.3.1
(function(){
  var express, path, cookieParser, bodyParser, expressSession, passport, logger, mongoose, flash, mult, app, initPassport, routes;
  express = require('express');
  path = require('path');
  cookieParser = require('cookie-parser');
  bodyParser = require('body-parser');
  expressSession = require('express-session');
  passport = require('passport');
  logger = require('morgan');
  mongoose = require('mongoose');
  flash = require('connect-flash');
  mult = require('multer');
  app = express();
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(mult({
    dest: './dist/uploads/'
  }));
  app.use(cookieParser());
  app.use(expressSession({
    secret: 'mySecretKey'
  }));
  app.use(express['static'](path.join(__dirname, 'public')));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use(logger('dev'));
  initPassport = require('./passport/init');
  initPassport(passport);
  routes = require('./routes/index')(passport);
  app.use('/', routes);
  module.exports = app;
}).call(this);
