
module.exports = function(mongoose, connection) {

	var taxRateSchema = mongoose.Schema({
		tax_name: {
			type: String,
			required: 'Name cannot be blank'
		},
		tax_rate: {
			type: String,
			required: 'Tax Rate cannot be blank'
		},
		type: Number,
		customer_group: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'CustomerGroup'
		},
		geo_zone: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'GeoZone'
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('TaxRate', taxRateSchema);
}