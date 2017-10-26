
module.exports = function(mongoose, connection) {
	var recurringOrdersSchema = mongoose.Schema({
		recurring_id: Number,
		order_id: Number,
		payment_resource: String,
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Buyer'
		},
		status: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'OrderStatus'
		},
		date_added: Date
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('RecurringOrder', recurringOrdersSchema);
}