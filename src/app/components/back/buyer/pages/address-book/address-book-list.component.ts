import { Component } from '@angular/core';

@Component({
	selector: 'buyer-address-book-list',
	templateUrl: './address-book-list.component.html',
	styleUrls: [ './address-book-list.component.scss' ]
})
export class AddressBookListComponent {
	entries = [
		{ 
			'firstName': 'First', 'lastName': 'Last', 'address1': 'Address1', 'city': 'City', 'zipcode': '10000', 'province': 'Liaoning', 'country': 'China'
		},
		{ 
			'firstName': 'First', 'lastName': 'Last', 'address1': 'Address1', 'city': 'City', 'zipcode': '10000', 'province': 'Liaoning', 'country': 'China'
		},
		{ 
			'firstName': 'First', 'lastName': 'Last', 'address1': 'Address1', 'city': 'City', 'zipcode': '10000', 'province': 'Liaoning', 'country': 'China'
		}
	]
}