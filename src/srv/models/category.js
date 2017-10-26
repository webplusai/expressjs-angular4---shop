
module.exports = function(mongoose, connection) {
	var categorySchema = mongoose.Schema({
		general: {
			name: {
				type: String,
				required: 'Name cannot be blank'
			},
			description: String,
			meta_tag_title: {
				type: String,
				required: 'Meta tag title cannot be blank'
			},
			meta_tag_description: String,
			meta_tag_keywords: String
		},
		data: {
			parent: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'category'
			},
			filters: Array,
			stores: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'store'
			} ],
			seo_url: String,
			image_url: String,
			is_top: Boolean,
			columns: Number,
			sort_order: Number,
			status: Number,
		},
		design: [{
			store: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'store',
				required: 'Store name cannot be blank'
			},
			layout_overrides: String
		}],
		fees: {
			sales_fee_fixed: Number,
			sales_fee_percent: Number,
			listing_fee_fixed: Number,
			listing_fee_percent: Number,
			payment_method: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'payment_method'
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