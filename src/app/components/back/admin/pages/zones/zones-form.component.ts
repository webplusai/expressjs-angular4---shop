import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-zones-form',
	templateUrl: './zones-form.component.html',
	styleUrls: [ './zones-form.component.scss' ]
})
export class ZonesFormComponent {

	private zoneId;

	countries = [];
	
	name = new FormControl('', [Validators.required]);
	code = new FormControl('', []);
	country = new FormControl('', []);
	status = new FormControl('', []);

	form = new FormGroup({
		name: 				this.name,
		code:				this.code,
		country:			this.country,
		status:				this.status
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.zoneId = params['id'];

			if (this.zoneId) {
				this.crudService.retrieveOne( 'Zone', this.zoneId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});

		this.crudService.retrieve( 'Country' ).subscribe( result => {
			if (result.status == 'ok') {
				this.countries = result.content;
			}
		});
	}

	saveZone() {
		if (this.form.valid) {
			this.form.value.model = 'Zone';

			let action = this.zoneId ? this.crudService.update( this.form.value, this.zoneId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/zones']);
			});
		}
	}

}