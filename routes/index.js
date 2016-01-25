var express = require('express');
var router = express.Router();

/* GET home page. */
var mongoose = require('mongoose');
var Object=require('../models/object.js')



//router.get('/', function(req, res, next) {
//  res.render('index', { Jeevan: 'Node' });
//});



router.get('/objects', function(req, res, next) {
  Object.find(function (err, result) {
    if (err) return next(err);
    res.render('jeevan',{hai:result})
    // res.json(todos);
  });
});




router.post('/', function(req, res, next) {
  Jeevan.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




module.exports = router;
