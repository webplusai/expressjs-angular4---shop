
module.exports = function(mongoose, connection) {

	var abstractCommissionSchema = mongoose.Schema({
		total: Number,
		pay: Number,
		waiting: Number
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('AbstractCommission', abstractCommissionSchema);
}