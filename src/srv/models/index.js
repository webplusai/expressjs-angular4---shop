
module.exports = function(mongoose, connection) {
	var result = {};

	result.Category = require('./category.js')(mongoose, connection);
	result.Product = require('./product.js')(mongoose, connection);
	result.Buyer = require('./buyer.js')(mongoose, connection);

	return result;
}