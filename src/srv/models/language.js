
module.exports = function(mongoose, connection) {

	var languageSchema = mongoose.Schema({
		name: String,
		code: String,
		locale: String,
		status: String,
		sort_order: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Language', languageSchema);
}