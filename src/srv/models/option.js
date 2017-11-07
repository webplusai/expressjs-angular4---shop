
module.exports = function(mongoose, connection) {
	var optionSchema = mongoose.Schema({
		name: {
			type: String,
			required: 'Name cannot be blank'
		},
		type: Number,
		attach_to_seller: Number,
		status: Number,
		sort_order: Number,
		options: [ {
			option_value_name: {
				type: String,
				required: 'Option value name cannot be blank'
			},
			image: String,
			sort_order: Number
		} ]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Option', optionSchema);
}