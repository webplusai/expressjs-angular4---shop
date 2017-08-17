import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'admin-leftnav',
	templateUrl: './left.component.html',
	styleUrls: ['./left.component.scss']
})
export class LeftSidenavComponent implements OnInit {

	/*menuItems = [
		{ icon: 'dashboard', 'text': 'Dashboard', 'link': 'dashboard', subMenuItems: [ { text: 'Sub', 'link': 'sub' } ] }
	];*/

	menuItems = [
		{ icon: 'dashboard', 			text: 'Dashboard',					link: 'dashboard' },
		{ icon: 'important_devices', 	text: 'EMH products Management', 	
																			subMenuItems: [ 
																				{ text: 'Categories', 			link: 'category' }, 
																				{ text: 'Products', 			link: 'product' }, 
																				{ text: 'EMH voucher', 			link: 'emh-voucher' }, 
																				{ text: 'EMH beauty box', 		link: 'emh-beauty-box' } 
																			] },
		{ icon: 'library_books', 		text: 'Customers', 					
																			subMenuItems: [
																				{ text: 'Buyers', 				link: 'buyer' }, 
																				{ text: 'Vendors', 				link: 'vendor' },
																				{ text: 'Bloggers', 			link: 'blogger' }, 
																				{ text: 'News',					link: 'news' }
																			] },
		{ icon: 'apps', 				text: 'Sales', 						
																			subMenuItems: [ 
																				{ text: 'Orders', 				link: 'order' },
																				{ text: 'Transactions', 		link: 'transaction' },
																				{ text: 'Recurring order', 		link: 'recurring-order' }, 
																				{ text: 'Returns', 				link: 'return' }
																			] },
		{ icon: 'list', 				text: 'Staffs', 					
																			subMenuItems: [ 
																				{ text: 'Super administrator', 	link: 'super-administrator' },
																				{ text: 'Staff setting', 		link: 'staff-setting' },
																				{ text: 'Moderators', 			link: 'moderator' }
																			] },
		{ icon: 'mail_outline', 		text: 'Advertisements', 			
																			subMenuItems: [ 
																				{ text: 'Affiliation', 			link: 'afilliation' }, 
																				{ text: 'Adverts', 				link: 'advert' }
																			] },
		{ icon: 'assessment', 			text: 'Message',					link: 'message' },
		{ icon: 'assessment', 			text: 'Comments',					link: 'comment' },
		{ icon: 'assessment', 			text: 'Media',						link: 'media' },
		{ icon: 'assessment', 			text: 'Newsletter',					link: 'newsletter' },
		{ icon: 'assessment', 			text: 'Design', 					
																			subMenuItems: [ 
																				{ text: 'Slideshare', 			link: 'slideshare' },
																				{ text: 'Partners', 			link: 'partner' },
																				{ text: 'Collaboration', 		link: 'collaboration' }
																			] },
		{ icon: 'shopping_basket',		text: 'Payments',					link: 'payment' },
		{ icon: 'shopping_basket',		text: 'Shipping',					link: 'shipping' },
		{ icon: 'shopping_basket',		text: 'Language Editor', 			
																			subMenuItems: [ 
																				{ text: 'English', 				link: 'english' },
																				{ text: 'Spanish', 				link: 'spanish' },
																				{ text: 'German', 				link: 'german' },
																				{ text: 'French', 				link: 'french' }
																			] },
		{ icon: 'shopping_basket',		text: 'Maintenance', 				
																			subMenuItems: [ 
																				{ text: 'Landing page',			link: 'landing-page' }
																			] },
		{ icon: 'shopping_basket',		text: 'Subscription plan',			link: 'subscription_plan' },
		{ icon: 'shopping_basket',		text: 'EMH TV',						link: 'emh_tv' },
		{ icon: 'settings', 			text: 'System Management', 			
																			subMenuItems: [ 
																				{ text: 'Setting', link: 'setting' },
																				{ text: 'Localisations', link: 'localisation' }
																			] },
		{ icon: 'shopping_basket', 		text: 'Reports', 					
																			subMenuItems: [ 
																				{ text: 'Statistics', link: 'statistic' }, 
																				{ text: 'Debug/Error', link: 'debug-error' },
																				{ text: 'Restoration', link: 'restoration' } 
																			] },
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
