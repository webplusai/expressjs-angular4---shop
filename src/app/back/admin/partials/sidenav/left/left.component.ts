import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'admin-leftnav',
	templateUrl: './left.component.html',
	styleUrls: ['./left.component.scss']
})
export class LeftSidenavComponent implements OnInit {

	menuItems = [
		{ icon: 'dashboard', 			text: 'Dashboard' },
		{ icon: 'important_devices', 	text: 'EMH products Management', 	subMenuItems: [ 'Categories', 'Products', 'EMH voucher', 'EMH beauty box' ] },
		{ icon: 'library_books', 		text: 'Customers', 					subMenuItems: [ 'Buyers', 'Vendors', 'BLoggers', 'News' ] },
		{ icon: 'apps', 				text: 'Sales', 						subMenuItems: [ 'Orders', 'Transactions', 'Recurring order', 'Returns' ] },
		{ icon: 'list', 				text: 'Staffs', 					subMenuItems: [ 'Super administrator', 'Staff setting', 'Moderators' ] },
		{ icon: 'mail_outline', 		text: 'Advertisements', 			subMenuItems: [ 'Affiliation', 'Adverts' ] },
		{ icon: 'assessment', 			text: 'Message' },
		{ icon: 'assessment', 			text: 'Comments' },
		{ icon: 'assessment', 			text: 'Media' },
		{ icon: 'assessment', 			text: 'Newsletter' },
		{ icon: 'assessment', 			text: 'Design', 					subMenuItems: [ 'Slideshare', 'Partners', 'Collaboration' ] },
		{ icon: 'shopping_basket',		text: 'Payments' },
		{ icon: 'shopping_basket',		text: 'Shipping' },
		{ icon: 'shopping_basket',		text: 'Language Editor', 			subMenuItems: [ 'English', 'Spanish', 'German', 'French' ] },
		{ icon: 'shopping_basket',		text: 'Maintenance', 				subMenuItems: [ 'Landing page' ] },
		{ icon: 'shopping_basket',		text: 'Subscription plan' },
		{ icon: 'shopping_basket',		text: 'EMH TV' },
		{ icon: 'settings', 			text: 'System Management', 			subMenuItems: [ 'Setting', 'Localisations' ] },
		{ icon: 'shopping_basket', 		text: 'Reports', 					subMenuItems: [ 'Statistics', 'Debug/Error', 'Restoration' ] },
	];

	constructor() { }

	ngOnInit() {
	}

	toggleMenuItem($event, item) {
		var e = $($event.target).closest('.mat-list-item');

		$('admin-leftnav .mat-list-item').removeClass('selected');
		e.addClass('selected');

		if (!e.hasClass('opened'))
			$('admin-leftnav .mat-list-item').removeClass('opened');
		if (item.subMenuItems) {
			e.toggleClass('opened');
		}
	}

	toggleSubMenuItem($event) {
		$('admin-leftnav .mat-list-item .sub-menu .mat-list-item').removeClass('selected');
		$($event.target).closest('.mat-list-item').addClass('selected');
	}

}
