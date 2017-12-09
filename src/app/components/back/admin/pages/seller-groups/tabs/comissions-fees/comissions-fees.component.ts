import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-seller-groups-tab-commissions-fees',
	templateUrl: './comissions-fees.component.html',
	styleUrls: ['./comissions-fees.component.scss']
})
export class SellerGroupComissionsFeesComponent implements OnInit {

	@Input() fees: FormGroup;
	
	constructor() { }

	ngOnInit() {
	}

}
