
module.exports = function(mongoose, connection) {

	var buyerSchema = mongoose.Schema({
		customer_group: String,
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
		telephone: {
			type: String,
			required: true
		},
		fax: String,
		password: {
			type: String,
			required: true
		},
		confirm_password: {
			type: String,
			required: true
		},
		newsletter: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Newsletter'
		},
		status: {
			type: Number
		},
		approved: {
			type: Boolean
		},
		safe:{
			type: Boolean
		}
	},
	{
		timestamps: true
	});

	return connection.model('Buyer', buyerSchema);
}