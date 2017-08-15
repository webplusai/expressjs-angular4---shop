import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-store-filter',
	templateUrl: './store-filter.component.html',
	styleUrls: ['./store-filter.component.scss']
})
export class StoreFilterComponent implements OnInit {

	storeTypes = [ 'Type of Store1', 'Type of Store2', 'Type of Store3', 'Type of Store4', 'Type of Store5' ];
	vendorTypes = [ 'Type of Vendor1', 'Type of Vendor2', 'Type of Vendor3', 'Type of Vendor4', 'Type of Vendor5' ];
	genderTypes = [ 'Man', 'Woman', 'Child', 'Baby' ];
	storeLocations = [ 'Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5' ];

	constructor() { }

	ngOnInit() {
	}

}
