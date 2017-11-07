
module.exports = function(mongoose, connection) {
	var recurringPaymentSchema = mongoose.Schema({
		recurring_id: Number,
		order_id: Number,
		payment_reference: String,
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Customer'
		},
		status: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('RecurringPayment', recurringPaymentSchema);
}