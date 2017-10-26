
module.exports = function(mongoose, connection) {

	var taxSummarySchema = mongoose.Schema({
		tax_name: String,
		tax_rate: String,
		tax_rate_type: Number,
		tax_amount: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('TaxSummary', taxSummarySchema);
}