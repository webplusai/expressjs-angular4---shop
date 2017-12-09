import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-order-statuses-form',
	templateUrl: './order-statuses-form.component.html',
	styleUrls: [ './order-statuses-form.component.scss' ]
})
export class OrderStatusesFormComponent {

	private orderStatusId;

	name = new FormControl('', [ Validators.required ]);
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
			this.orderStatusId = params['id'];

			if (this.orderStatusId) {
				this.crudService.retrieveOne( 'OrderStatus', this.orderStatusId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveOrderStatus() {
		if (this.form.valid) {
			this.form.value.model = 'OrderStatus';

			let action = this.orderStatusId ? this.crudService.update( this.form.value, this.orderStatusId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/order-statuses']);
			});
		}
	}
}