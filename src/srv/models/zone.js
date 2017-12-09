
module.exports = function(mongoose, connection) {

	var zoneSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		code: String,
		country: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Country'
		},
		status: String
	},
	{
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	return connection.model('Zone', zoneSchema);
}