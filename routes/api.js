//dependencies
var express = require('express');
var router = express.Router();

//models
var Product = require('../models/product');
var Supplier = require('../models/supplier');

//assign methods and create routes
Product.methods(['get','put','post','delete']);
Product.register(router,'/product');

Supplier.methods(['get','post']);
Supplier.register(router,'/supplier');


//Return router 
module.exports = router;