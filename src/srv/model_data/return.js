var one = models.Return({
	order_information: {
		order_id: 1,
		order_date: '2017-04-12',
		first_name: 'First',
		last_name: 'Last',
		email: 'email@email.com',
		telephone: '235256232'
	},
	product_information: {
		product: '59e763474d28e71ec412e417',
		model: 'Model'
	}
},
{
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});