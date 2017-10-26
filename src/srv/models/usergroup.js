
module.exports = function(mongoose, connection) {

	var userGroupSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		access_permissions: [
			{
				type: String
			}
		],
		modify_permission: [
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

	return connection.model('UserGroup', userGroupSchema);
}