var express = require('express');
var router = express.Router();
var controller =  require('./object.controller.js');

//router.get('/', controller.index);
router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
