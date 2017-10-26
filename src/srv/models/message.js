
module.exports = function(mongoose, connection) {

	var messageSchema = mongoose.Schema({
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		message_box: {
			type: Number,
			required: true 
		},
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		status: {
			type: Number,
			required: true 
		},
		title: {
			type: String,
			required: true 
		},
		content: String,
		attachments: [
			{
				type: String
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Message', messageSchema);
}