
module.exports = function(mongoose, connection) {

	var subscriptionGroupSchema = mongoose.Schema({
		image: String,
		expire_in: Number,
		membership_group: Number,
		membership_type: Number,
		trial_period: Boolean,
		no_of_trial: Number,
		no_of_products: Number,
		price: Number,
		customer_group: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'CustomerGroup'
		},
		duration: Number,
		cycle: Number,
		frequency: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('SubscriptionGroup', subscriptionGroupSchema);
}