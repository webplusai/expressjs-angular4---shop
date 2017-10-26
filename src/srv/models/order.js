
module.exports = function(mongoose, connection) {
	
	var orderSchema = mongoose.Schema({
		customer_details: {
			store: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Store'
			},
			currency: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Currency'
			},
			customer: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Buyer'
			},
			customer_gruop: Number,
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
			},
			fax: String
		},
		products: [ {
			product_type: Number,
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
			}
		} ],
		payment_details: {
			address_id: Number,
			first_name: {
				type: String,
				required: true
			},
			last_name: {
				type: String,
				required: true
			},
			company: String,
			address1: {
				type: String,
				required: true
			},
			address2: String,
			city: String,
			postcode: String,
			country: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Country',
				required: true
			},
			region_state: {
				type: String,
				required: true
			}
		},
		shipping_details: {
			address_id: Number,
			first_name: {
				type: String,
				required: true
			},
			last_name: {
				type: String,
				required: true
			},
			company: String,
			address1: {
				type: String,
				required: true
			},
			address2: String,
			city: String,
			postcode: String,
			country: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Country',
				required: true
			},
			region_state: {
				type: String,
				required: true
			}
		},
		totals: {
			order_details: {
				shipping_method: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'ShippingMethod',
					required: true
				},
				payment_method: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'PaymentMethod',
					required: true
				},
				coupon: String,
				voucher: String,
				reward: String,
				order_status: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'OrderStatus'
				},
				comment: String,
				afilliate: String
			}
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Order', orderSchema);
}