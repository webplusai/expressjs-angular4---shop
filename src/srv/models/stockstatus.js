
module.exports = function(mongoose, connection) {

	var stockStatusSchema = mongoose.Schema({
		name: {
			type: String,
			required: true 
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('StockStatus', stockStatusSchema);
}