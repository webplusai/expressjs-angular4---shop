
module.exports = function(mongoose, connection) {

	var returnStatusSchema = mongoose.Schema({
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

	return connection.model('ReturnStatus', returnStatusSchema);
}