
module.exports = function(mongoose, connection) {

	var commentSchema = mongoose.Schema({
		rating: {
			type: Number,
			required: true
		},
		buyer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Buyer',
			required: true
		},
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true
		},
		store: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Store',
			required: true
		},
		content: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	})

	return connection.model('Comment', commentSchema);
}