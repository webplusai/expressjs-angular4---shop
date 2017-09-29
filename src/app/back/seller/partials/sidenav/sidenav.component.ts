import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'seller-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	@Input() page_alias: any;

	listItems = [
		{ text: 'Dashboard',  			link: 'dashboard' },
		{ text: 'Profile',  			link: 'profile' },
		{ text: 'Products', 			link: 'products' },
		{ text: 'Shipping Settings',	link: 'shipping-settings' },
		{ text: 'Orders',				link: 'orders' },
		{ text: 'Financial Records',	link: 'financial-records' },
		{ text: 'Messages',				link: 'messages' },
		{ text: 'Payout',				link: 'payouts' },
	];

	constructor() { }

	ngOnInit() {
	}

	toggleMenuItem(event) {
		$('.mat-list-item').removeClass('selected');
		$(event.target).closest('.mat-list-item').addClass('selected');
	}

}
