
module.exports = function(mongoose, connection) {

	var mediaSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		type: {
			type: Number,
			required: true
		},
		link: {
			type: String,
			required: true,
			isUrl: true
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Media', mediaSchema);
}