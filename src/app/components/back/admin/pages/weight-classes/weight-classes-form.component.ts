import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-weight-classes-form',
	templateUrl: './weight-classes-form.component.html',
	styleUrls: [ './weight-classes-form.component.scss' ]
})
export class WeightClassFormComponent {

	private weightClassId;

	weight_title 	= new FormControl('', [ Validators.required ]);
	weight_unit 	= new FormControl('', [ Validators.required ]);
	value 			= new FormControl('', []);

	form = new FormGroup({
		weight_title: 	this.weight_title,
		weight_unit: 	this.weight_unit,
		value: 			this.value
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.weightClassId = params['id'];

			if (this.weightClassId) {
				this.crudService.retrieveOne( 'WeightClass', this.weightClassId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	saveWeightClass() {
		if (this.form.valid) {
			this.form.value.model = 'WeightClass';

			let action = this.weightClassId ? this.crudService.update( this.form.value, this.weightClassId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/weight-classes']);
			});
		}
	}

}