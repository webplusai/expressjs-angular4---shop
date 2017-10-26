
module.exports = function(mongoose, connection) {

	var historicalOrderSchema = mongoose.Schema({
		reference_order: String,
		date: Date,
		client: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		commission_total: Number,
		state_commission: Number,
		state_payment_commission: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('HistoricalOrder', historicalOrderSchema);
}