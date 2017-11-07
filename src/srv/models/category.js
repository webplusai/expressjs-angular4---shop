
module.exports = function(mongoose, connection) {
	var categorySchema = mongoose.Schema({
		general: {
			name: {
				english: {
					type: String,
					required: 'Name cannot be blank'
				},
				french: String,
				german: String,
				spanish: String
			},
			description: {
				english: String,
				french: String,
				german: String,
				spanish: String
			},
			meta_tag_title: {
				english: {
					type: String,
					required: 'Meta tag title cannot be blank'
				},
				french: String,
				german: String,
				spanish: String
			},
			meta_tag_description: {
				english: String,
				french: String,
				german: String,
				spanish: String
			},
			meta_tag_keywords: {
				english: String,
				french: String,
				german: String,
				spanish: String
			}
		},
		data: {
			parent: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Category'
			},
			filters: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Filter'
			} ],
			stores: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Store'
			} ],
			seo_url: String,
			image_url: String,
			is_top: Boolean,
			columns: Number,
			sort_order: Number,
			status: Number,
		},
		fees: {
			sales_fee_fixed: Number,
			sales_fee_percent: Number,
			listing_fee_fixed: Number,
			listing_fee_percent: Number,
			payment_method: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'PaymentMethod'
			}
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Category', categorySchema);
}