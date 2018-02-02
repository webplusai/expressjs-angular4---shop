
module.exports = function(mongoose, connection) {

	var storeLocationSchema = mongoose.Schema({
		name: String,
		address: String,
		geocode: String,
		telephone: String,
		fax: String,
		image: String,
		opening_times: String,
		comment: String,
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('StoreLocation', storeLocationSchema);
}