import { Component } 															from 	'@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } 						from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 										from 	'@angular/router';

import { CRUDService } 															from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-vendors-form',
	templateUrl: './vendors-form.component.html',
	styleUrls: [ './vendors-form.component.scss' ]
})
export class VendorsFormComponent {

	private vendorId;

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
				user: [''],
				first_name: [''],
				last_name: [''],
				email: [''],
				password: [''],
				confirm_password: [''],

				nickname: [''],
				seo_keyword: [''],
				seller_group: [''],
				product_validation: [''],
				description: [''],
				status: ['']
			}),
			fees: this.fb.group({
				sales_fee_fixed: [''],
				sales_fee_percent: [''],
				listing_fee_fixed: [''],
				listing_fee_percent: [''],
				listing_fee_method: [''],
			}),
			settings: this.fb.group({
				full_name: [''],
				address_line1: [''],
				address_line2: [''],
				city: [''],
				state_province_region: [''],
				zip_postal_code: [''],
				country: [''],
				website: [''],
				company: [''],
				phone: ['']
			})
		 });

		this.route.params.subscribe((params: Params) => {
			this.vendorId = params['id'];

			if (this.vendorId) {
				this.crudService.retrieveOne( 'Seller', this.vendorId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveVendor() {
		if (this.form.valid) {
			this.form.value.model = 'Seller';

			if (!this.form.value.general.user)
				delete this.form.value.general.user;

			let action = this.vendorId ? this.crudService.update( this.form.value, this.vendorId ) : this.crudService.create( this.form.value );
			action.subscribe( sellerGroup => {
				this.router.navigate(['/admin/vendors']);
			});
		}
	}
}