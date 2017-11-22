import { Component } 											from 	'@angular/core';
import { Router, ActivatedRoute, Params } 						from 	'@angular/router';
import { FormGroup, Validators, FormControl } 					from 	'@angular/forms';

import { CRUDService } 											from 	'../../../../../services/crud.service';

@Component({
	selector: 		'admin-customer-groups-form',
	styleUrls: 		[ './customer-groups-form.component.scss' ],
	templateUrl: 	'./customer-groups-form.component.html',
})
export class CustomerGroupsFormComponent {

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	name 					= 	new FormControl('', [ Validators.required ]);
	description 			= 	new FormControl('', []);
	approve_new_customers 	= 	new FormControl('', []);
	sort_order 				= 	new FormControl('', []);

	form = new FormGroup({
		name: 					this.name,
		description: 			this.description,
		approve_new_customers: 	this.approve_new_customers,
		sort_order: 			this.sort_order
	});

	private customerGroupId;

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.customerGroupId = params['id'];

			if (this.customerGroupId) {
				this.crudService.retrieveOne( 'CustomerGroup', this.customerGroupId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveCustomerGroup() {
		if (this.form.valid) {
			this.form.value.model = 'CustomerGroup';

			let action = this.customerGroupId ? this.crudService.update( this.form.value, this.customerGroupId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/customer-groups']);
			});
		}
	}
}