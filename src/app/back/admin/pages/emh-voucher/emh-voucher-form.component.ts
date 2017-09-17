import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-emh-voucher-form',
	templateUrl: './emh-voucher-form.component.html',
	styleUrls: [ './emh-voucher-form.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class EmhVoucherFormComponent {

	form = new FormGroup({});
}