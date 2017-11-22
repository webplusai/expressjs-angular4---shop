import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-product-grid',
	templateUrl: './product-grid.component.html',
	styleUrls: ['./product-grid.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProductGridComponent implements OnInit {

	public cols: number;

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
