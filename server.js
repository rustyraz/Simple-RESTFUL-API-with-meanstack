//get the dependecies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to our db
mongoose.connect('mongodb://localhost/meantemplate1');

//instantiate  the express variables
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//start server
app.listen(3000);
console.log('Server running on port 3000');
