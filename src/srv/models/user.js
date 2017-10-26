
module.exports = function(mongoose, connection) {
	var userSchema = mongoose.Schema({
		username: {
			type: String,
			required: true
		},
		user_group: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'UserGroup'
		},
		first_name:  {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true
		},
		image: String,
		password: String,
		confirm_password: String,
		status: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});
	
	return connection.model('User', userSchema);
}

