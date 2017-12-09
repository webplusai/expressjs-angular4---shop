import { Component } 											from 	'@angular/core';
import { Router, ActivatedRoute, Params } 						from 	'@angular/router';
import { FormGroup, Validators, FormControl } 					from 	'@angular/forms';

import { CRUDService } 											from 	'../../../../../services/crud.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'admin-buyers-form',
	templateUrl: 'buyers-form.component.html',
	styleUrls: [ 'buyers-form.component.scss' ]
})
export class BuyersFormComponent {

	private buyerId;

	customerGroups = [];

	customer_group = new FormControl('', []);

	first_name = new FormControl('', [
		Validators.required
	]);

	last_name=new FormControl('', [
		Validators.required
	]);

	email = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)
	]);

	telephone = new FormControl('', [
		Validators.required
	]);

	fax = new FormControl('', []);

	password = new FormControl('', [
		Validators.required
	]);

	confirm_password = new FormControl('', [
		Validators.required
	]);

	newsletter = new FormControl('', []);

	status = new FormControl('', []);

	approved = new FormControl('', []);

	safe = new FormControl('', []);

	form = new FormGroup({
		customer_group		:	this.customer_group,
		first_name			: 	this.first_name,
		last_name			: 	this.last_name,
		email 				: 	this.email,
		telephone			: 	this.telephone,
		fax					:	this.fax,
		password			: 	this.password,
		confirm_password	: 	this.confirm_password,
		newsletter			:	this.newsletter,
		status				:	this.status,
		approved			:	this.approved,
		safe				:	this.safe
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.buyerId = params['id'];

			if (this.buyerId) {
				this.crudService.retrieveOne( 'Buyer', this.buyerId )
					.subscribe((result) => {
						this.form.patchValue(result.content);
					});
			}
		});

		this.crudService.retrieve( 'CustomerGroup' )
			.subscribe((result) => {
				this.customerGroups = result.content;
			});
	}

	saveBuyer() {
		if (this.form.valid) {
			this.form.value.model = 'Buyer';

			let action = this.buyerId ? this.crudService.update( this.form.value, this.buyerId ) : this.crudService.create( this.form.value );
			action.subscribe( buyer => {
				this.router.navigate(['/admin/buyers']);
			});
		}
	}
}