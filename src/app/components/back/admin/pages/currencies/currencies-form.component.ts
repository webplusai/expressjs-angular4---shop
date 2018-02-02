import { Component } 											from 	'@angular/core';
import { Router, ActivatedRoute, Params } 						from 	'@angular/router';
import { FormGroup, Validators, FormControl } 					from 	'@angular/forms';

import { CRUDService } 											from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-currencies-form',
	templateUrl: './currencies-form.component.html',
	styleUrls: [ './currencies-form.component.scss' ]
})
export class CurrenciesFormComponent {

	private currencyId;
	
	title 				=	new FormControl('', [Validators.required]);
	code 				=	new FormControl('', [Validators.required]);
	symbol_left 		=	new FormControl('', []);
	symbol_right 		=	new FormControl('', []);
	decimal_places		=	new FormControl('', []);
	value 				=	new FormControl('', []);
	status 				=	new FormControl('', []);

	form = new FormGroup({
		title:				this.title,
		code:				this.code,
		symbol_left:		this.symbol_left,
		symbol_right:		this.symbol_right,
		decimal_places:		this.decimal_places,
		value:				this.value,
		status:				this.status
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.currencyId = params['id'];

			if (this.currencyId) {
				this.crudService.retrieveOne( 'Currency', this.currencyId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveCurrency() {
		if (this.form.valid) {
			this.form.value.model = 'Currency';

			let action = this.currencyId ? this.crudService.update( this.form.value, this.currencyId ) : this.crudService.create( this.form.value );
			action.subscribe( currency => {
				this.router.navigate(['/admin/currencies']);
			});
		}
	}

}