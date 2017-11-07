
module.exports = function(mongoose, connection) {

	var filterGroupSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		sort_order: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('FilterGroup', filterGroupSchema);
}