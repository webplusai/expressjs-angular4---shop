import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'colloboration-panel',
	templateUrl: './colloboration-panel.component.html',
	styleUrls: ['./colloboration-panel.component.scss']
})
export class ColloborationPanelComponent implements OnInit {

	slideConfig = { "slidesToShow": 4, "slidesToScroll": 1 };

	constructor() { }

	ngOnInit() {
	}

}
