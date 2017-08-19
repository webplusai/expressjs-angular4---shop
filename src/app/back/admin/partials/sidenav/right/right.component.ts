import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-rightnav',
	templateUrl: './right.component.html',
	styleUrls: ['./right.component.scss']
})
export class RightSidenavComponent implements OnInit {

	workProgressList = [
		{ title: 'Target Sell', 		percent: '25%', 	deadline: '12 June 13' },
		{ title: 'Product Delivery', 	percent: '55%', 	deadline: '12 June 13' },
		{ title: 'Payment Collection', 	percent: '25%', 	deadline: '12 June 13' },
		{ title: 'Delivery Pending', 	percent: '44%', 	deadline: '12 June 13' },
		{ title: 'Total Progress', 		percent: '50%', 	deadline: '12 June 13' },
	];

	contactOnlineList = [
		{ photo: 'avatar1_small.jpg', 	name: 'Jonathan Smith', 	status: 'Work for fun', 	color: 'rgb(255, 108, 96)' },
		{ photo: 'avatar1.jpg', 		name: 'Anjelina Joe', 		status: 'Available', 		color: 'rgb(169, 216, 110)' },
		{ photo: 'chat-avatar2.jpg', 	name: 'John Doe', 			status: 'Away from Desk', 	color: 'rgb(252, 179, 34)' },
		{ photo: 'avatar1_small.jpg', 	name: 'Mark Henry', 		status: 'Working', 			color: 'rgb(129, 117, 199)' }
	];

	constructor() { }

	ngOnInit() {
	}

}
