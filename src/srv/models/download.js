
module.exports = function(mongoose, connection) {

	var downloadSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		}
	},
	{
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	return connection.model('Download', downloadSchema);
}