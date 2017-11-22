
module.exports = function(mongoose, connection) {

	var storeSchema = mongoose.Schema({
		name: String,
		url: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Store', storeSchema);
}