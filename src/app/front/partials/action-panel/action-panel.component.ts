import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'action-panel',
	templateUrl: './action-panel.component.html',
	styleUrls: ['./action-panel.component.scss'],
})
export class ActionPanelComponent implements OnInit {

	public emailFormControl: FormControl;

	infData = [
		{
			header: { icon: 'info', text: 'Information' },
			list: [
				{ icon: 'chrome_reader_mode', text: 'About Equality Mode House' },
				{ icon: 'chrome_reader_mode', text: 'Delivery Information' },
				{ icon: 'verified_user', text: 'Privacy Policy' },
				{ icon: 'verified_user', text: 'Terms & Conditions' }
			]
		},
		{  
			header: { icon: 'share', text: 'Stay Connected' },
			list: [
				{ icon: 'face', text: 'Facebook' },
				{ icon: 'face', text: 'Youtube' },
				{ icon: 'forum', text: 'Our Community' },
				{ icon: 'group', text: 'Emh Private Daily Profiles' }
			]
		},
		{  
			header: { icon: 'account_circle', text: 'My Account' },
			list: [
				{ icon: 'account_circle', text: 'My Account' },
				{ icon: 'history', text: 'Order History' },
				{ icon: 'favorite', text: 'Wish List' },
				{ icon: 'new_releases', text: 'Newsletter' }
			]
		}
	]

	contactData = [
		{ icon: 'email', text: 'Contact Us' },
		{ icon: 'help', text: 'Help' },
		{ icon: 'question_answer', text: 'FAQs' }
	];

	constructor() { }


	ngOnInit() {
		this.emailFormControl = new FormControl('', [
			Validators.required
		]);
	}

}
