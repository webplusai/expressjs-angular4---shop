
module.exports = function(mongoose, connection) {
	var wishListSchema = mongoose.Schema({
		image: String,
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product'
		},
		model: String,
		stock: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Wishlist', wishListSchema);
}