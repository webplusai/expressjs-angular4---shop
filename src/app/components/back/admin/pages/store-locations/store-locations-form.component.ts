import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-store-locations-form',
	templateUrl: './store-locations-form.component.html',
	styleUrls: [ './store-locations-form.component.scss' ]
})
export class StoreLocationsFormComponent { 

	private storeLocationId;
	private imgUrl;

	name 			= new FormControl('', [ Validators.required ]);
	address 		= new FormControl('', [ Validators.required ]);
	geocode 		= new FormControl('', []);
	telephone 		= new FormControl('', [ Validators.required ]);
	fax 			= new FormControl('', []);
	image			= new FormControl('', []);
	opening_times 	= new FormControl('', []);
	comment 		= new FormControl('', []);

	form = new FormGroup({
		name: 			this.name,
		address:		this.address,
		geocode:		this.geocode,
		telephone:		this.telephone,
		fax:			this.fax,
		image:			this.image,
		opening_times:	this.opening_times,
		comment:		this.comment
	});

	constructor(
		private route:			ActivatedRoute,
		private router: 		Router,
		private crudService: 	CRUDService
	) { }

	ngOnInit() {

		this.route.params.subscribe((params: Params) => {
			this.storeLocationId = params['id'];

			if (this.storeLocationId) {
				this.crudService.retrieveOne( 'StoreLocation', this.storeLocationId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
					$("#imageURL").change();
				});
			}
		});
	}

	saveStoreLocation() {
		if (this.form.valid) {
			this.form.value.model = 'StoreLocation';
			this.form.value.image = $('#imageURL').val();

			let action = this.storeLocationId ? this.crudService.update( this.form.value, this.storeLocationId ) : this.crudService.create( this.form.value );
			action.subscribe( storeLocation => {
				this.router.navigate(['/admin/store-locations']);
			});
		}
	}

}