
var populateList = {
	'TaxRate': ['geo_zone'],
	'Buyer': ['customer_group'],
	'Transaction': [{path: 'seller', populate: {path: 'general.user'}}],
	'Seller': ['general.user'],
	'Zone': ['country']
};

module.exports = {
	populateList: populateList
}