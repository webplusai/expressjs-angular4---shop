
module.exports = function(mongoose, connection) {

	var transactionSchema = mongoose.Schema({
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Seller'
		},
		amount: Number,
		description: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Transaction', transactionSchema);
}