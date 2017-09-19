import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-daily-sales',
	templateUrl: './daily-sales.component.html',
	styleUrls: ['./daily-sales.component.scss']
})
export class DailySalesComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$('.progress-stat-bar li').each(function () {
	        $(this).find('.progress-stat-percent').animate({
	            height: $(this).attr('data-percent')
	        }, 1000);
	    });
	}

}
