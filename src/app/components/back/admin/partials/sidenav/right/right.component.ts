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
		{ photo: 'avatar1_small.jpg', 	name: 'Jonathan Smith', 	status: 'Work for fun', 	color: '#ff6c60' },
		{ photo: 'avatar1.jpg', 		name: 'Anjelina Joe', 		status: 'Available', 		color: '#a9d86e' },
		{ photo: 'chat-avatar2.jpg', 	name: 'John Doe', 			status: 'Away from Desk', 	color: '#fcb322' },
		{ photo: 'avatar1_small.jpg', 	name: 'Mark Henry', 		status: 'Working', 			color: '#8175c7' }
	];

	constructor() { }

	ngOnInit() {
	}

}
