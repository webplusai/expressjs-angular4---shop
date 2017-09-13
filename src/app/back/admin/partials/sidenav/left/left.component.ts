import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
																				{ text: 'Categories', 			link: 'categories' }, 
																				{ text: 'Products', 			link: 'products' }, 
																				{ text: 'EMH voucher', 			link: 'emh-voucher' }, 
																				{ text: 'EMH beauty box', 		link: 'emh-beauty-box' } 
																			] },
		{ icon: 'library_books', 		text: 'Customers', 					
																			subMenuItems: [
																				{ text: 'Buyers', 				link: 'buyers' }, 
																				{ text: 'Vendors', 				link: 'vendors' },
																				{ text: 'Bloggers', 			link: 'bloggers' }, 
																				{ text: 'News',					link: 'news' }
																			] },
		{ icon: 'apps', 				text: 'Sales', 						
																			subMenuItems: [ 
																				{ text: 'Orders', 				link: 'orders' },
																				{ text: 'Transactions', 		link: 'transactions' },
																				{ text: 'Recurring orders', 		link: 'recurring-orders' }, 
																				{ text: 'Returns', 				link: 'returns' }
																			] },
		{ icon: 'list', 				text: 'Staffs', 					
																			subMenuItems: [ 
																				{ text: 'Super administrator', 	link: 'super-administrator' },
																				{ text: 'Staff setting', 		link: 'staff-setting' },
																				{ text: 'Moderators', 			link: 'moderators' }
																			] },
		{ icon: 'mail_outline', 		text: 'Advertisements', 			
																			subMenuItems: [ 
																				{ text: 'Affiliation', 			link: 'affiliation' }, 
																				{ text: 'Adverts', 				link: 'adverts' }
																			] },
		{ icon: 'assessment', 			text: 'Message',					link: 'message' },
		{ icon: 'assessment', 			text: 'Comments',					link: 'comments' },
		{ icon: 'assessment', 			text: 'Media',						link: 'media' },
		{ icon: 'assessment', 			text: 'Newsletter',					link: 'newsletter' },
		{ icon: 'assessment', 			text: 'Design', 					
																			subMenuItems: [ 
																				{ text: 'Slideshow', 			link: 'slideshow' },
																				{ text: 'Partners', 			link: 'partners' },
																				{ text: 'Collaboration', 		link: 'collaboration' }
																			] },
		{ icon: 'shopping_basket',		text: 'Payments',					link: 'payments' },
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
																				{ text: 'Localisations', link: 'localisations' }
																			] },
		{ icon: 'shopping_basket', 		text: 'Reports', 					
																			subMenuItems: [ 
																				{ text: 'Statistics', link: 'statistics' }, 
																				{ text: 'Debug/Error', link: 'debug-error' },
																				{ text: 'Restoration', link: 'restoration' } 
																			] },
	];

	constructor(private router: Router) {
		
	}

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
