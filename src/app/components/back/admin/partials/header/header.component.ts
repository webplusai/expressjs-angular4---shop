import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	taskNotifications = [
		{ title: 'Target Sell', date: '25% , Deadline  12 June’13' },
		{ title: 'Product Delivery', date: '45% , Deadline  12 June’13' },
		{ title: 'Payment collection', date: '87% , Deadline  12 June’13' },
		{ title: 'Target Sell', date: '33% , Deadline  12 June’13' },
	];

	mailNotifications = [
		{ avatar: 'assets/img/avatar-mini.jpg', from: 'Jonathan Smith', time: 'Just now', message: 'Hello, this is an example msg.' },
		{ avatar: 'assets/img/avatar-mini-2.jpg', from: 'Jane Doe', time: '2 min ago', message: 'Nice admin template' },
		{ avatar: 'assets/img/avatar-mini-3.jpg', from: 'Tasi sam', time: '2 days ago', message: 'This is an example msg.' },
		{ avatar: 'assets/img/avatar-mini.jpg', from: 'Mr. Perfect', time: '2 hour ago', message: 'Hi there, its a test' }
	];

	menuItems = [
		{ icon: 'account_circle', text: 'Profile' },
		{ icon: 'settings', text: 'Settings' },
		{ icon: 'vpn_key', text: 'Log Out' },
	];

	constructor() { }

	ngOnInit() {
	}

	leftSidenav() {
		document.getElementById("leftSideNav").dispatchEvent(new Event("click"));
	}

	rightSidenav() {
		document.getElementById("rightSideNav").dispatchEvent(new Event("click"));
	}

}
