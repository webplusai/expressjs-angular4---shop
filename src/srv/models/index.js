
module.exports = function(mongoose, connection) {
	var models = {};

	var modelNames = [
		'Category',
		'Product',
		'Buyer',
		'Seller',
		'News',
		'Order',
		'Transaction',
		'RecurringOrder',
		'Return',
		'User',
		'UserGroup',
		'AbstractCommission',
		'HistoricalOrder',
		'Advert',
		'Message',
		'Comment',
		'Media',
		'Newsletter',
		'Slideshow',
		'Partner',
		'Collaboration',
		'PaymentMethod',
		'ShippingSetting',
		'ShippingReport',
		'LandingPage',
		'SubscriptionGroup',
		'StoreLocation',
		'Language',
		'Currency',
		'StockStatus',
		'OrderStatus',
		'Store',
		'SocialLink',
		'Badge',
		'TaxSummary',
		'DebugError'
	];

	for (var i = 0; i < modelNames.length; i++) {
		models[modelNames[i]] = require('./' + modelNames[i].toLowerCase() + '.js')(mongoose, connection);
	}

	return models;
}