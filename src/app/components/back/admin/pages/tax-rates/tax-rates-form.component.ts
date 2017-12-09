import { Component } 										from 	'@angular/core';
import { FormGroup, FormArray, FormControl, Validators} 	from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 					from 	'@angular/router';

import { CRUDService } 										from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-tax-rates-form',
	templateUrl: './tax-rates-form.component.html',
	styleUrls: [ './tax-rates-form.component.scss' ]
})
export class TaxRateFormComponent {

	private taxRateId;

	geoZones = [];
	customerGroups = [];
	selectedCustomerGroups = [];

	name 			= new FormControl('', [ Validators.required ]);
	rate 			= new FormControl('', [ Validators.required ]);
	type 			= new FormControl('', []);
	geo_zone		= new FormControl('', []);

	form = new FormGroup({	
		name: 				this.name,
		rate: 				this.rate,
		type: 				this.type,
		customer_groups: 	new FormArray([]),
		geo_zone: 			this.geo_zone,
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.taxRateId = params['id'];

			if (this.taxRateId) {
				this.crudService.retrieveOne( 'TaxRate', this.taxRateId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
					this.selectedCustomerGroups = result.content.customer_groups || [];
					console.log(this.selectedCustomerGroups);
					console.log(this.form.value);
				});
			}
		});

		this.crudService.retrieve( 'CustomerGroup' ).subscribe( result => {
			if (result.status == 'ok') {
				this.customerGroups = result.content;
			}
		});

		this.crudService.retrieve( 'GeoZone' ).subscribe( result => {
			if (result.status == 'ok') {
				this.geoZones = result.content;
			}
		});
	}

	checkCustomerGroup(event, customerGroup) {
		if (event.checked == true)
			this.selectedCustomerGroups.push(customerGroup._id);
		else
			this.selectedCustomerGroups = this.selectedCustomerGroups.filter( (id) => id != customerGroup._id );
	}

	saveTaxRate() {
		if (this.form.valid) {
			this.form.value.model = 'TaxRate';
			this.form.value.customer_groups = this.selectedCustomerGroups;

			let action = this.taxRateId ? this.crudService.update( this.form.value, this.taxRateId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/tax-rates']);
			});
		}
	}
}