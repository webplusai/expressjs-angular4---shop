import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-return-actions-form',
	templateUrl: './return-actions-form.component.html',
	styleUrls: [ './return-actions-form.component.scss' ]
})
export class ReturnActionsFormComponent { 

	private returnActionId;

	name = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		name: this.name
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.returnActionId = params['id'];

			if (this.returnActionId) {
				this.crudService.retrieveOne( 'ReturnAction', this.returnActionId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveReturnAction() {
		if (this.form.valid) {
			this.form.value.model = 'ReturnAction';

			let action = this.returnActionId ? this.crudService.update( this.form.value, this.returnActionId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/return-actions']);
			});
		}
	}
}