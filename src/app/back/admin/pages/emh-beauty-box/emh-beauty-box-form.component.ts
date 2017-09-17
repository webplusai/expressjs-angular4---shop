import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-emh-beauty-box-form',
	templateUrl: './emh-beauty-box-form.component.html',
	styleUrls: [ './emh-beauty-box-form.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class EmhBeautyBoxFormComponent {

	form = new FormGroup({});
}