import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } 	from 	'@angular/forms';

@Component({
	selector: 'admin-categories-form',
	templateUrl: './categories-form.component.html',
	styleUrls: [ './categories-form.component.scss' ]
})
export class CategoriesFormComponent {

	form: FormGroup;

	constructor(
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			general: this.fb.group({
				name: [''],
				description: [''],
				meta_tag_title: [''],
				meta_tag_description: [''],
				meta_tag_keywords: [''],
			}),
			data: this.fb.group({
				parent: [''],
				filters: [''],
				stores: [''],
				seo_url: [''],
				columns: [''],
				sort_order: [''],
				status: ['']
			}),
			fees: this.fb.group({
				sales_fee_fixed: [''],
				sales_fee_percent: [''],
				listing_fee_fixed: [''],
				listing_fee_percent: [''],
				payment_method: ['']
			})
		 });
	}
}