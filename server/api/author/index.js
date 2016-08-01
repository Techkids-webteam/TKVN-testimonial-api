/**
 * Created by Admin on 10/06/2016.
 */
'use strict';

var express = require('express');
var controller = require('./testimonial.controller.js');

var router = express.Router();

//getAll
router.get('/mad', controller.getAllMad);
router.get('/web', controller.getAllWeb);
router.get('/c4e', controller.getAllc4e);

//getById
router.get('/mad/:id', controller.getMadById);
router.get('/web/:id', controller.getWebById);
router.get('/c4e/:id', controller.getc4eById);

module.exports = router;
