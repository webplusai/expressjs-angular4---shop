import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'admin-revenue-by-quarter',
	templateUrl: './revenue-by-quarter.component.html',
	styleUrls: ['./revenue-by-quarter.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RevenueByQuarterComponent implements OnInit {

	constructor() { }

	ngOnInit() {

		for (var i = 0; i < 4; i++) {
			Morris.Bar({
		        element: 'graph-barQ' + (i + 1),
		        data: [
		            { x: '2007', a: 3 },
		            { x: '2008', a: 1 },
		            { x: '2009', a: 4 },
		            { x: '2010', a: 5 },
		            { x: '2011', a: 8 },
		            { x: '2012', a: 2 },
		            { x: '2013', a: 7 },
		            { x: '2014', a: 6 },
		            { x: '2015', a: 5 },
		            { x: '2016', a: 2 },
		            { x: '2017', a: 6 }

		        ],
		        xkey: 'x',
		        ykeys: ['a'],
		        labels: ['A'],
		        barColors: ['#79D1CF']
		    });
		}
	}

}
