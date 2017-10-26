
module.exports = function(mongoose, connection) {
	var productSchema = mongoose.Schema({
		product_type: Number,
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
			},
			product_tags: {
				english: String,
				french: String,
				german: String,
				spanish: String
			}
		},
		data: {
			model: {
				type: String,
				required: 'Model cannot be blank'
			},
			sku: String,
			upc: String,
			ean: String,
			jan: String,
			isbn: String,
			mpn: String,
			location: String,
			price: Number,
			tax_class: Number,
			quantity: Number,
			minimum_quantity: Number,
			subtract_stock: Boolean,
			out_of_stock_status: Number,
			requires_shipping: Boolean,
			seo_url: String,
			date_available: Date,
			length: Number,
			width: Number,
			height: Number,
			length_class: Number,
			weight: Number,
			weight_class: Number,
			status: Number,
			sort_order: Number
		},
		links: {
			manufacturer: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'manufacturer'
			},
			categories: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Category'
			} ],
			filters: Array,
			stores: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'store'
			} ],
			downloads: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'download'
			} ],
			related_products: [ {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'product'
			} ]
		},
		attribute: [ {
			attribute: String,
			text: {
				english: String,
				french: String,
				spanish: String,
				german: String
			}
		} ],
		option: [ {
			type: String,
			required: Boolean,
			date_time: Date,
			options: [ {
				option_value: String,
				quantity: Number,
				subtract_stock: Boolean,
				price_prefix: Number,
				price: Number,
				points_prefix: Number,
				points: Number,
				weight_prefix: Number,
				weight: Number
			} ]
		} ],
		recurring_profile: [ {
			recurring_profile: String,
			customer_group: String
		} ],
		discount: [ {
			customer_group: String,
			quantity: Number,
			priority: Number,
			price: Number,
			date_start: Date,
			date_end: Date
		} ],
		special: [ {
			customer_group: String,
			priority: Number,
			price: Number,
			date_start: Date,
			date_end: Date
		} ],
		image: {
			featured_image: String,
			additional_images: [ {
				image: String,
				sort_order: Number
			} ]
		},
		reward_points: {
			points: Number,
			list: [ {
				customer_group: String,
				reward_points: Number
			} ]
		},
		design: [ {
			stores: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'store'
			},
			layout_override: String
		} ],
		seller_general: {
			negotiate_price: Number,
			message_to_the_reviewer: String,
		},
		shipping_methods: [ {
			shipping_method: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'shipping_method'
			},
			comment: String,
			cost: {
				type: Number,
				required: 'Cost cannot be blank'
			},
			geo_zone: String
		} ],
		special_prices: [ {
			priority: Number,
			price: Number,
			start_date: Date,
			end_date: Date
		} ],
		quantity_discounts: [ {
			priority: Number,
			quantity: Number,
			price: Number,
			start_date: Date,
			end_date: Date
		} ],
		seller_options: [ {
			option_name: String,
			list: [ {
				option_type: String,
				price: Number,
				quantity: Number
			} ]
		} ]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	return connection.model('Product', productSchema);
}