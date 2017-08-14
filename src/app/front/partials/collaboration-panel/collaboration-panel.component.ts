import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'collaboration-panel',
	templateUrl: './collaboration-panel.component.html',
	styleUrls: ['./collaboration-panel.component.scss']
})
export class CollaborationPanelComponent implements OnInit {

	slideConfig = { "slidesToShow": 4, "slidesToScroll": 1 };

	constructor() { }

	ngOnInit() {
	}

}
