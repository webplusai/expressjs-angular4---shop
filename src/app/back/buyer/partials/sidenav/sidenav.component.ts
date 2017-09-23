import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'buyer-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	listItems = [
		{ text: 'My Account',  			link: 'my-account' },
		{ text: 'Edit Account',  		link: 'edit-account' },
		{ text: 'Password', 			link: 'password' },
		{ text: 'Address Book',			link: 'address-book' },
		{ text: 'Wish List',			link: 'wish-list' },
		{ text: 'Order History',		link: 'order-history' },
		{ text: 'Downloads',			link: 'downloads' },
		{ text: 'Recurring payments',	link: 'recurring-payments' },
		{ text: 'Reward Points',		link: 'reward-points' },
		{ text: 'Returns',				link: 'returns' },
		{ text: 'Transactions',			link: 'transactions' },
		{ text: 'Newsletter',			link: 'Newsletter' }
	];

	constructor() { }

	ngOnInit() {
	}

	toggleMenuItem(event) {
		$('.mat-list-item').removeClass('selected');
		$(event.target).closest('.mat-list-item').addClass('selected');
	}

}
