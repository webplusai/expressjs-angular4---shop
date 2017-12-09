import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-seller-groups-tab-general',
	templateUrl: './general.component.html',
	styleUrls: ['./general.component.scss']
})
export class SellerGroupGeneralComponent implements OnInit {

	@Input() general: FormGroup;

	constructor() { }

	ngOnInit() {
	}

}
