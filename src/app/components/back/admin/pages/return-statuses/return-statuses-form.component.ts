import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-return-statuses-form',
	templateUrl: './return-statuses-form.component.html',
	styleUrls: [ './return-statuses-form.component.scss' ]
})
export class ReturnStatusesFormComponent { 

	private returnStatusId;

	name = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		name: this.name
	});

	constructor(
		private route:			ActivatedRoute,
		private router: 		Router,
		private crudService: 	CRUDService
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.returnStatusId = params['id'];

			if (this.returnStatusId) {
				this.crudService.retrieveOne( 'ReturnStatus', this.returnStatusId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveReturnStatus() {
		if (this.form.valid) {
			this.form.value.model = 'ReturnStatus';

			let action = this.returnStatusId ? this.crudService.update( this.form.value, this.returnStatusId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/return-statuses']);
			});
		}
	}
}