import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-stock-statuses-form',
	templateUrl: './stock-statuses-form.component.html',
	styleUrls: [ './stock-statuses-form.component.scss' ]
})
export class StockStatusesFormComponent { 

	private stockStatusId;

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
			this.stockStatusId = params['id'];

			if (this.stockStatusId) {
				this.crudService.retrieveOne( 'StockStatus', this.stockStatusId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveStockStatus() {
		if (this.form.valid) {
			this.form.value.model = 'StockStatus';

			let action = this.stockStatusId ? this.crudService.update( this.form.value, this.stockStatusId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/stock-statuses']);
			});
		}
	}
}