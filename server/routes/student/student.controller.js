/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /students              ->  index
 * POST    /students              ->  create
 * GET     /students/:id          ->  show
 * PUT     /students/:id          ->  update
 * DELETE  /students/:id          ->  destroy
 */

'use strict';
/* GET home page. */

var Student = require('./student.model.js')

//exports.index = function(req, res, next) {
//  res.render('index', { Jeevan: 'Node' });
//}

exports.index = function(req, res, next) {
    Student.find(function (err, result) {
        if (err) return next(err);
        res.json({students:result})
        // res.json(todos);
    });
}

exports.create = function(req, res, next) {
    Student.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}