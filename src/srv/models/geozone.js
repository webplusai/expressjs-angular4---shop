
module.exports = function(mongoose, connection) {

	var geoZoneSchema = mongoose.Schema({
		name: {
			type: String,
			required: 'Name cannot be blank'
		},
		description: {
			type: String,
			required: 'Description cannot be blank'
		},
		geo_zones: [
			{
				country: Number,
				zone: Number
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('GeoZone', geoZoneSchema);
}