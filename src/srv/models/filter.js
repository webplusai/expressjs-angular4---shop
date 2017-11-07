
module.exports = function(mongoose, connection) {
	
	var filterSchema = mongoose.Schema({
		filter_group: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FilterGroup'
		},
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

	return connection.model('Filter', filterSchema);
}