
module.exports = function(mongoose, connection) {

	var currencySchema = mongoose.Schema({
		title: String,
		code: String,
		symbol_left: String,
		symbol_right: String,
		decimal_places: Number,
		value: Number,
		status: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Currency', currencySchema);
}