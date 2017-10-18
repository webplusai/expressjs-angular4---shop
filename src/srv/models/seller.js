
module.exports = function(mongoose, connection) {
	var vendorSchema = mongoose.Schema({
		user_data: {
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}，
			first_name: {
				type: String,
				required: true,
			},
			last_name: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true,
			},
			password: {
				type: String,
				required: true,
			},
			confirm_password: {
				type: String,
				required: true
			}
		},
		seller_data: {
			nickname: {
				type: String,
				required: true
			},
			seo_keyword: {
				type: String
			},
			seller_group: {
				type: String
			},
			product_validation: {
				type: Number
			},
			description: {
				english: String,
				french: String,
				german: String,
				spanish: String
			},
			status: {
				type: Number
			}
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	})
}