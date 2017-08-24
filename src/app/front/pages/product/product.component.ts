import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	breadcrumbItems = [ 
		{ 'text': 'DaWanda', 'link': '' },
		{ 'text': 'PROMOTIONS', 'link': '' },
		{ 'text': 'Sacs femme', 'link': '' },
		{ 'text': 'Sacs a main', 'link': '' },
		{ 'text': 'Sac envelop blou gris / clutch / pochette / vegan', 'link': '' },
	];

	constructor() { }

	ngOnInit() {
	}

}
