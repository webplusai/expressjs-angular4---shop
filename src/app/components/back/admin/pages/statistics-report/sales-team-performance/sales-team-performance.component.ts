import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from "d3";
import * as c3 from "c3";

@Component({
	selector: 'admin-sales-team-performance',
	templateUrl: './sales-team-performance.component.html',
	styleUrls: ['./sales-team-performance.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SalesTeamPerformanceComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var chart = c3.generate({
	        bindto: '#roated-chartClosed',
	        data: {
	            columns: [
	            ['data1', 30, 200, 100, 400, 150, 250, 200, 100, 400, 150, 250]
	            ],
	            types: {
	                data1: 'bar'
	            }
	        },
	        axis: {
	            rotated: true,
	            x: {
	                type: 'categorized'
	            }
	        }
	    });
	    var chart = c3.generate({
	        bindto: '#roated-chartAverage',
	        data: {
	            columns: [
	            ['data1', 30, 200, 100, 400, 150, 250, 200, 100, 400, 150, 250]
	            ],
	            types: {
	                data1: 'bar'
	            }
	        },
	        axis: {
	            rotated: true,
	            x: {
	                type: 'categorized'
	            }
	        }
	    });
	}

}
