
module.exports = function(mongoose, connection) {

	var debugErrorSchema = mongoose.Schema({
		message: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('DebugError', debugErrorSchema);
}