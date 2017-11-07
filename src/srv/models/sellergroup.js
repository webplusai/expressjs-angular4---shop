
module.exports = function(mongoose, connection) {

	var sellerGroupSchema = mongoose.Schema({
		general: {
			name: {
				type: String,
				required: 'Name cannot be blank'
			},
			description: {
				type: String,
				required: 'Description cannot be blank'
			},
			max_product_nubmer: Number
		},
		commissions_fees: {
			sales_fee_fixed: Number,
			sales_fee_percent: Number,
			listing_fee_fixed: Number,
			listing_fee_percent: Number,
			listing_fee_payment: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'PaymentMethod'
			},
			singup_fee: Number,
			signup_fee_payment: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'PaymentMethod'
			}
		},
		badges: [
			{
				badge: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Badge'
				}
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('SellerGroup', sellerGroupSchema);
}