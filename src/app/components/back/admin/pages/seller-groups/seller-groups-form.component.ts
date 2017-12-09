import { Component } 															from 	'@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } 						from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 										from 	'@angular/router';

import { CRUDService } 															from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-seller-groups-form',
	templateUrl: './seller-groups-form.component.html',
	styleUrls: [ './seller-groups-form.component.scss' ]
})
export class SellerGroupsFormComponent {
	
	private sellerGroupId;

	form: FormGroup;

	constructor(
		private fb: 			FormBuilder,
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			general: this.fb.group({
				name: [''],
				description: [''],
				max_product_number: ['']
			}),
			fees: this.fb.group({
				sales_fee_fixed: [''],
				sales_fee_percent: [''],
				listing_fee_fixed: [''],
				listing_fee_percent: [''],
				listing_fee_payment: [''],
				signup_fee: [''],
				signup_fee_payment: ['']
			})
		 });

		this.route.params.subscribe((params: Params) => {
			this.sellerGroupId = params['id'];

			if (this.sellerGroupId) {
				this.crudService.retrieveOne( 'SellerGroup', this.sellerGroupId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveSellerGroup() {
		if (this.form.valid) {
			this.form.value.model = 'SellerGroup';

			let action = this.sellerGroupId ? this.crudService.update( this.form.value, this.sellerGroupId ) : this.crudService.create( this.form.value );
			action.subscribe( sellerGroup => {
				this.router.navigate(['/admin/seller-groups']);
			});
		}
	}
}