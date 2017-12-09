
var md5 = require('md5');

module.exports = function(mongoose, connection) {
	var sellerSchema = mongoose.Schema({
		general: {
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Buyer'
			},
			first_name: {
				type: String,
			},
			last_name: {
				type: String,
			},
			email: {
				type: String,
			},
			password: {
				type: String,
			},
			nickname: {
				type: String,
				required: true
			},
			seo_keyword: String,
			seller_group: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'SellerGroup'
			},
			product_validation: String,
			description: {
				english: String,
				french: String,
				german: String,
				spanish: String
			},
			status: String
		},
		fees: {
			sales_fee_fixed: Number,
			sales_fee_percent: Number,
			listing_fee_fixed: Number,
			listing_fee_percent: Number,
			listing_fee_method: String
		},
		badges: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Badge'
		} ],
		settings: {
			full_name: String,
			address_line1: String,
			address_line2: String,
			city: String,
			state_province_region: String,
			zip_postal_code: String,
			country: String,
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
				ref: 'Country'
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
		},
		valid_until: Date
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	sellerSchema.pre('save', function(next) {
		this.general.password = md5(this.general.password);
		next();
	});

	return connection.model('Seller', sellerSchema);
}