import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-collaborator-panel',
	templateUrl: './collaborator-panel.component.html',
	styleUrls: ['./collaborator-panel.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CollaboratorPanelComponent implements OnInit {

	slideConfig = { 
		"slidesToShow": 4, 
		"slidesToScroll": 1
	};

	constructor() { }

	ngOnInit() {
	}

}
