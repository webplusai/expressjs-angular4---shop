
module.exports = function(mongoose, connection) {

	var socialLinkSchema = mongoose.Schema({
		icon: String,
		link: String,
		text: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('SocialLink', socialLinkSchema);
}