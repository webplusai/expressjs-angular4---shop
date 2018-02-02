import { Component } 											from 	'@angular/core';
import { Router, ActivatedRoute, Params } 						from 	'@angular/router';
import { FormGroup, Validators, FormControl } 					from 	'@angular/forms';

import { CRUDService } 											from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-languages-form',
	templateUrl: './languages-form.component.html',
	styleUrls: [ './languages-form.component.scss' ]
})
export class LanguagesFormComponent {

	private languageId;
	
	name 				=	new FormControl('', [Validators.required]);
	code 				=	new FormControl('', [Validators.required]);
	locale 				=	new FormControl('', [Validators.required]);
	status 				=	new FormControl('', []);
	sort_order			=	new FormControl('', []);

	form = new FormGroup({
		name:			this.name,
		code:			this.code,
		locale:			this.locale,
		status:			this.status,
		sort_order:		this.sort_order
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.languageId = params['id'];

			if (this.languageId) {
				this.crudService.retrieveOne( 'Language', this.languageId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveLanguage() {
		if (this.form.valid) {
			this.form.value.model = 'Language';

			let action = this.languageId ? this.crudService.update( this.form.value, this.languageId ) : this.crudService.create( this.form.value );
			action.subscribe( currency => {
				this.router.navigate(['/admin/languages']);
			});
		}
	}
}