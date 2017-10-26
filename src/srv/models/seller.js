
module.exports = function(mongoose, connection) {
	var sellerSchema = mongoose.Schema({
		user_data: {
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			},
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
			seo_keyword: String,
			seller_group: String,
			product_validation: Number,
			description: {
				english: String,
				french: String,
				german: String,
				spanish: String
			},
			status: Number
		},
		fee: {
			sales_fee_fixed: Number,
			sales_fee_percent: Number,
			listing_fee_fixed: Number,
			listing_fee_percent: Number,
			payment_method: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'PaymentMethod'
			}
		},
		badges: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Badge'
		} ],
		user_settings: {
			full_name: String,
			address_line1: String,
			address_line2: String,
			city: String,
			state_province_region: String,
			zip_postal_code: String,
			country: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Country'
			} ],
			website: String,
			company: String,
			phone: String
		},
		product_count: Number,
		sales: Number,
		earnings: Number,
		balance: Number,
		front: {
			store_image: String,
			owner_image: String,
			evaluation_count: Number,
			fb_link: String,
			tw_link: String,
			gp_link: String,
			pin_link: String,
		},
		profile: {
			store_type: Number,
			facebook_page_url: String,
			web_url: String,
			tweet_like_link: String,
			facebook_like_link: String,
			country_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Countryu'
			},
			region_state: String,
			company: String,
			type_of_vendor: Number,
			paypal: String,
			tweet_page_url: String,
			store_for: Number,
			advantages_for_clients: String,
			brand_presentation: String,
			description: String
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Seller', sellerSchema);
}