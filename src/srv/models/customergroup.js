
module.exports = function(mongoose, connection) {

	var customerGroupSchema = mongoose.Schema({
		name: {
			type: String,
			required: 'Name cannot be null'
		},
		description: String,
		approve_new_cusotmers: Boolean,
		sort_order: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('CustomerGroup', customerGroupSchema);
}