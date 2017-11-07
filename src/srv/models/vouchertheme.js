
module.exports = function(mongoose, connection) {

	var voucherThemeSchema = mongoose.Schema({
		name: {
			type: String,
			required: 'Name cannot be blank'
		},
		image: {
			type: String,
			required: 'Name cannot be blank'
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('VoucherTheme', voucherThemeSchema);
}