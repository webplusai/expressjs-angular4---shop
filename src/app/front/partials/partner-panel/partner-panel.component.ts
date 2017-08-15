import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-partner-panel',
	templateUrl: './partner-panel.component.html',
	styleUrls: ['./partner-panel.component.scss']
})
export class PartnerPanelComponent implements OnInit {

	slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 3000 };
	
	constructor() { }

	ngOnInit() {
	}

}
