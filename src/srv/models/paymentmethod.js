
module.exports = function(mongoose, connection) {

	var paymentMethodSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		logo_link: String,
		status: Number,
		sort_order: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('PaymentMethod', paymentMethodSchema);
}