import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'store-grid',
	templateUrl: './store-grid.component.html',
	styleUrls: ['./store-grid.component.scss']
})
export class StoreGridComponent implements OnInit {

	public cols: number;
	public selectedTab = 0;
	
	colors = [ '#F44336', '#607D8B', '#9C27B0', '#FF5722', '#3F51B5', '#FFC107', '#00BCD4', '#8BC34A', '#4CAF50', '#009688', '#FFEB3B', '#2196F3', '#FF9800', '#673AB7', '#795548', '#E91E63' ];
	
	vendors = [ 'marc jacob', 'fendi', 'givenchy', 'dolce and gabbana', 'adidas', 'gucci', 'louis vuiton', 'prada', 'chloe', 'marc jacoba', 'fendib', 'givenchyc' ];

	constructor() { }

	ngOnInit() {
		this.cols = 4;

		setInterval(() => {
			if (this.selectedTab == 4)
				this.selectedTab = 0;
			else
				this.selectedTab++;
		},  3000);

		var before = document.getElementsByClassName("mat-tab-header-pagination-before");
		var after = document.getElementsByClassName("mat-tab-header-pagination-after");
		var self = this;

		for (var i = 0; i < before.length; i++) {
			before[i].addEventListener("click", function() {
				if (self.selectedTab == 0)
					self.selectedTab = 4;
				else
					self.selectedTab --;
			});
		}

		for (var i = 0; i < after.length; i++) {
			after[i].addEventListener("click", function() {
				if (self.selectedTab == 4)
					self.selectedTab = 0;
				else
					self.selectedTab++;
			});
		}
	}

	selectChange($event) {
		this.selectedTab = $event.index;
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
