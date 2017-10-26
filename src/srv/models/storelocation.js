
module.exports = function(mongoose, connection) {

	var storeLocationSchema = mongoose.Schema({
		store: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Store'
		},
		address: String
	});

	return connection.model('StoreLocation', storeLocationSchema);
}