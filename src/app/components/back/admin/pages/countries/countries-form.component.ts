import { Component } 											from 	'@angular/core';
import { Router, ActivatedRoute, Params } 						from 	'@angular/router';
import { FormGroup, Validators, FormControl } 					from 	'@angular/forms';

import { CRUDService } 											from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-countries-form',
	templateUrl: './countries-form.component.html',
	styleUrls: [ './countries-form.component.scss' ]
})
export class CountriesFormComponent {

	private countryId;
	
	name 				=	new FormControl('', [Validators.required]);
	iso_code_2 			=	new FormControl('', []);
	iso_code_3 			=	new FormControl('', []);
	address_format 		=	new FormControl('', []);
	postcode_required 	=	new FormControl('', []);
	status 				=	new FormControl('', []);

	form = new FormGroup({
		name: 				this.name,
		iso_code_2:			this.iso_code_2,
		iso_code_3:			this.iso_code_3,
		address_format:		this.address_format,
		postcode_required:	this.postcode_required,
		status:				this.status
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.countryId = params['id'];

			if (this.countryId) {
				this.crudService.retrieveOne( 'Country', this.countryId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveCountry() {
		if (this.form.valid) {
			this.form.value.model = 'Country';

			let action = this.countryId ? this.crudService.update( this.form.value, this.countryId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/countries']);
			});
		}
	}

}