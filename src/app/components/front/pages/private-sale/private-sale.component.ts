import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-private-sale',
	templateUrl: './private-sale.component.html',
	styleUrls: ['./private-sale.component.scss']
})
export class PrivateSaleComponent implements OnInit {

	public cols: number;

	shopList = [
		{ image: 'assets/img/product1.png', name: 'Clock Shop' },
		{ image: 'assets/img/product2.png', name: 'Electronic Shop' },
		{ image: 'assets/img/product3.png', name: 'Computer Shop' },
		{ image: 'assets/img/product4.png', name: 'Clock Shop' },
		{ image: 'assets/img/product5.png', name: 'Clock Shop' },
		{ image: 'assets/img/product6.png', name: 'Clock Shop' },
		{ image: 'assets/img/product7.png', name: 'Music Shop' },
		{ image: 'assets/img/product8.png', name: 'Accessories Shop' },
		{ image: 'assets/img/product9.png', name: 'Clock Shop' },
		{ image: 'assets/img/product1.png', name: 'Clock Shop' },
		{ image: 'assets/img/product2.png', name: 'Electronic Shop' },
		{ image: 'assets/img/product3.png', name: 'Computer Shop' },
	]

	constructor() { }

	ngOnInit() {
		this.cols = 4;
	}

	onResize() {
		const width = window.innerWidth;

		if (width > 1280)
			this.cols = 4;
		else if (width > 600)
			this.cols = 3;
		else
			this.cols = 2;
	}

}
