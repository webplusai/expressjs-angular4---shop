
module.exports = function(mongoose, connection) {

	var newsSchema = mongoose.Schema({
		title: String,
		description: String,
		author: Number,
		category: Number,
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('News', newsSchema);
}