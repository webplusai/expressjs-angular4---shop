import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-vendors-tab-fees',
	templateUrl: './fees.component.html',
	styleUrls: ['./fees.component.scss']
})
export class VendorFeesComponent implements OnInit {

	@Input() fees: FormGroup;

	constructor() { }

	ngOnInit() {
	}

}
