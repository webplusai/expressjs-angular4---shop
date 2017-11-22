import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-length-classes-form',
	templateUrl: './length-classes-form.component.html',
	styleUrls: [ './length-classes-form.component.scss' ]
})
export class LengthClassFormComponent {

	private lengthClassId;

	length_title 	= new FormControl('', [ Validators.required ]);
	length_unit 	= new FormControl('', [ Validators.required ]);
	value 			= new FormControl('', []);

	form = new FormGroup({
		length_title: 	this.length_title,
		length_unit: 	this.length_unit,
		value: 			this.value
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.lengthClassId = params['id'];

			if (this.lengthClassId) {
				this.crudService.retrieveOne( 'LengthClass', this.lengthClassId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveLengthClass() {
		if (this.form.valid) {
			this.form.value.model = 'LengthClass';

			let action = this.lengthClassId ? this.crudService.update( this.form.value, this.lengthClassId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/length-classes']);
			});
		}
	}
}