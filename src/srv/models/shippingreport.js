
module.exports = function(mongoose, connection) {

	var shippingReportSchema = mongoose.Schema({
		date_start: Date,
		date_end: Date,
		shipping_title: String,
		no_orders: Number,
		total: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('ShippingReport', shippingReportSchema);
}