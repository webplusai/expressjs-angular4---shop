
module.exports = function(mongoose, connection) {
	var taxClassSchema = mongoose.Schema({
		title: {
			type: String,
			required: 'Title cannot be blank'
		},
		description: {
			type: String,
			required: 'Description cannot be blank'
		},
		tax_rates: [ {
			tax_rate: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'TaxRate'
			},
			based_on: Number,
			priority: Number
		} ]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('TaxClass', taxClassSchema);
}