import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'action-panel',
	templateUrl: './action-panel.component.html',
	styleUrls: ['./action-panel.component.scss']
})
export class ActionPanelComponent implements OnInit {

	constructor() { }

	public emailFormControl: FormControl;

	ngOnInit() {
		this.emailFormControl = new FormControl('', [
			Validators.required
		]);
	}

}
