
module.exports = function(mongoose, connection) {

	var countrySchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		iso_code_2: String,
		iso_code_3: String,
		address_format: String,
		postcode_required: String,
		status: String
	},
	{
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	return connection.model('Country', countrySchema);
}