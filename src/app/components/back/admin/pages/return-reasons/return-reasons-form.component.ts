import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-return-reasons-form',
	templateUrl: './return-reasons-form.component.html',
	styleUrls: [ './return-reasons-form.component.scss' ]
})
export class ReturnReasonsFormComponent { 

	private returnReasonId;

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
			this.returnReasonId = params['id'];

			if (this.returnReasonId) {
				this.crudService.retrieveOne( 'ReturnReason', this.returnReasonId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveReturnReason() {
		if (this.form.valid) {
			this.form.value.model = 'ReturnReason';

			let action = this.returnReasonId ? this.crudService.update( this.form.value, this.returnReasonId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/return-reasons']);
			});
		}
	}
}