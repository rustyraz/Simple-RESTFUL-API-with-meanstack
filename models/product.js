//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Create the schema
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

//Return the schema
module.exports = restful.model('Products', productSchema);