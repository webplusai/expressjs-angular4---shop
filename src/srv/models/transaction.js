
module.exports = function(mongoose, connection) {

	var transactionSchema = mongoose.Schema({
		from: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		to: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
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