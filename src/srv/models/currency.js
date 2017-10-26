
module.exports = function(mongoose, connection) {

	var currencySchema = mongoose.Schema({
		title: String,
		code: String,
		value: Number,
		last_updated: Date
	},
	{
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	return connection.model('Currency', currencySchema);
}