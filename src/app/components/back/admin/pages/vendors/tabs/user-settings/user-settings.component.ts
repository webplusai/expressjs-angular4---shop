import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-vendors-tab-user-settings',
	templateUrl: './user-settings.component.html',
	styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

	@Input() settings: FormGroup;

	constructor() { }

	ngOnInit() {
	}

}
