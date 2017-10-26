
module.exports = function(mongoose, connection) {
	var returnSchema = mongoose.Schema({
		order_information: {
			order_id: {
				type: Number,
				required: true
			},
			order_date: Date,
			customer: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Buyer'
			},
			first_name: {
				type: String,
				required: true
			},
			last_name: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true
			},
			telephone: {
				type: String,
				required: true
			}
		},
		product_information: {
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
				required: true
			},
			model: {
				type: String,
				required: true
			},
			quantity: Number
		},
		reason_for_return: {
			return_reason: String,
			opened: Boolean,
			comment: String,
			return_action: Number,
			return_status: Number
		}
	}, 
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Return', returnSchema);
}