var one = new modules.Category({
	general: {
		name: 'Computer',
		description: 'My Computer',
		meta_tag_title {
			english : 'Meta tag title',
		}
		meta_tag_description: 'Meta tag description',
		meta_tag_keywords: 'Meta tag keywords'
	},
	data: {
		parent: 122352243252,
		filters: [ 'Filter1', 'Filter2' ],
		stores: [
			122352243252, 122352243252, 122352243252
		],
		seo_url: 'computer',
		image_url: 'https://google.com',
		is_top: true,
		columns: 5,
		sort_order: 10,
		status: 1
	},
	design: [
		{
			store: 122352243252,
			layout_overrides: 'Category'
		},
		{
			store: 122352243252,
			layout_overrides: 'Category'
		}
	],
	fees: {
		sales_fee_fixed: 0.5,
		sales_fee_percent: 3,
		listing_fee_fixed: 0.5,
		listing_fee_percent: 5,
		payment_method_id: 122352243252
	}
});