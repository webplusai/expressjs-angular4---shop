
module.exports = function(mongoose, connection) {

	var taxRateSchema = mongoose.Schema({
		name: {
			type: String,
			required: 'Name cannot be blank'
		},
		rate: {
			type: String,
			required: 'Tax Rate cannot be blank'
		},
		type: String,
		customer_groups: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'CustomerGroup'
		}],
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