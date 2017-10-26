var one = new models.Order({
	customer_details: {
		first_name: 'First',
		last_name: 'Last',
		email: 'email@email.com',
		telephone: '1234565789'
	},
	payment_details: {
		first_name: 'First',
		last_name: 'Last',
		address1: 'Addr1',
		country: '59e763474d28e71ec412e417',
		region_state: 'State'
	},
	shipping_details: {
		first_name: 'First',
		last_name: 'Last',
		address1: 'Addr1',
		country: '59e763474d28e71ec412e417',
		region_state: 'State'
	},
	totals: {
		order_details: {
			shipping_method: '59e665d0ed79390e24ddc77c',
			payment_method: '59e665d0ed79390e24ddc77c'
		}
	}
});