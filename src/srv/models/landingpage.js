
module.exports = function(mongoose, connection) {

	var landingPageSchema = mongoose.Schema({
		alert_type: Number,
		alert_text: String,
		site_offline_message: String,
		site_offline: Boolean,
		social_links: [
			{
				icon: String,
				link: String,
				text: String
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('LandingPage', landingPageSchema);
}