'use strict';


var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(app){
    // view engine setup
    app.set('views', path.normalize(__dirname + '/..') + '/views');
    app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    // Serving public and angular files from public folder
    app.use(express.static(path.join(__dirname, 'public')));

}