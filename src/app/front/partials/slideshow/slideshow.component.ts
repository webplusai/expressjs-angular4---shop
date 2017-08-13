import { Component } from '@angular/core';

@Component({
	selector: 'slideshow',
	templateUrl: './slideshow.component.html'
})
export class SlideshowComponent {
	public selectedTab = 0;
	
	ngOnInit() {
		setInterval(() => {
			if (this.selectedTab == 4)
				this.selectedTab = 0;
			else
				this.selectedTab ++;
		}, 3000);
	}

	selectChange($event) {
		this.selectedTab = $event.index;
	}
}