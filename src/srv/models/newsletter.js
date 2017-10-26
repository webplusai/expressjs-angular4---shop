
module.exports = function(mongoose, connection) {

	var newsletterSchema = mongoose.Schema({
		id: {
			type: Number,
			default: 1
		},
		email: String,
		type: Number,
		first_name: String,
		last_name: String,
		status: Number,
		website: String,
		store: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Store'
		},
		store_view: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Newsletter', newsletterSchema);
}