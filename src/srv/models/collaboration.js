
module.exports = function(mongoose, connection) {

	var collaborationSchema = mongoose.Schema({
		collaborations: [
			{
				title: String,
				link: String,
				image: String,
				sort_order: Number
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Collaboration', collaborationSchema);
}