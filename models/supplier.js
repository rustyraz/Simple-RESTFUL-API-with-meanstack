//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//create the schema
var supplierSchema = new mongoose.Schema({
	name: String,
	email: String,
	address: String
});

//export the model with the schema
module.exports = restful.model('Suppliers', supplierSchema);