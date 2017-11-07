
module.exports = function(mongoose, connection) {
	var rewardPointSchema = mongoose.Schema({
		description: String,
		points: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('RewardPoint', rewardPointSchema);
}