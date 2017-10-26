
module.exports = function(mongoose, connection) {

	var advertSchema = mongoose.Schema({
		month: Date,
		date: Date,
		description: String,
		earnings_credits: Number,
		payments_debits: Number,
		monthly_balance: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Advert', advertSchema);
}