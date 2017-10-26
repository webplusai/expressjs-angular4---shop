
module.exports = function(mongoose, connection) {

	var storeSchema = mongoose.Schema({
		store_name: String,
		store_url: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Store', storeSchema);
}