
module.exports = function(mongoose, connection) {

	var shippingSettingSchema = mongoose.Schema({
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Seller'
		},
		shipping_from: String,
		processing_time: Number,
		shipping_methods: [
			{
				destination: String,
				shipping_company: String,
				delivery_time: Number,
				weight_from: Number,
				weight_to: Number,
				cost_fixed: Number,
				cost_per_weight_unit: Number
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('ShippingSetting', shippingSettingSchema);
}