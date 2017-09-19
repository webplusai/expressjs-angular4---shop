import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	    var thisMonth = moment().format('YYYY-MM');

	    var eventArray = [
	        { startDate: thisMonth + '-10', endDate: thisMonth + '-14', title: 'Multi-Day Event' },
	        { startDate: thisMonth + '-21', endDate: thisMonth + '-23', title: 'Another Multi-Day Event' }
	    ];

	    $('.cal1').clndr({
	        events: eventArray,
	        clickEvents: {
	            click: function (target) {
	                // if you turn the `constraints` option on, try this out:
	                // if($(target.element).hasClass('inactive')) {
	                //   console.log('not a valid datepicker date.');
	                // } else {
	                //   console.log('VALID datepicker date.');
	                // }
	            },
	            nextMonth: function () {
	                console.log('next month.');
	            },
	            previousMonth: function () {
	                console.log('previous month.');
	            },
	            onMonthChange: function () {
	                console.log('month changed.');
	            },
	            nextYear: function () {
	                console.log('next year.');
	            },
	            previousYear: function () {
	                console.log('previous year.');
	            },
	            onYearChange: function () {
	                console.log('year changed.');
	            }
	        },
	        multiDayEvents: {
	            startDate: 'startDate',
	            endDate: 'endDate'
	        },
	        showAdjacentMonths: true,
	        adjacentDaysChangeMonth: false
	    });
	}

}
