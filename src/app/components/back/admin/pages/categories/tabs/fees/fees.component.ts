import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-category-tab-fees',
	templateUrl: './fees.component.html',
	styleUrls: ['./fees.component.scss']
})
export class CategoryFeesComponent implements OnInit {

	@Input() fees: FormGroup;

	constructor() { }

	ngOnInit() {
	}

}
