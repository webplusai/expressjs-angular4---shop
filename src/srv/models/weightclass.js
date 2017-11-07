
module.exports = function(mongoose, connection) {

	var weightClassSchema = mongoose.Schema({
		weight_title: {
			type: String,
			required: 'Weight title cannot be blank'
		},
		weight_unit: {
			type: String,
			required: 'Weight unit cannot be blank'
		},
		value: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('WeightClass', weightClassSchema);
}