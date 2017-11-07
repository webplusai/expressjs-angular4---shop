
module.exports = function(mongoose, connection) {

	var lengthClassSchema = mongoose.Schema({
		length_title: {
			type: String,
			required: 'Length title cannot be blank'
		},
		length_unit: {
			type: String,
			required: 'Length unit cannot be blank'
		},
		value: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('LengthClass', lengthClassSchema);
}