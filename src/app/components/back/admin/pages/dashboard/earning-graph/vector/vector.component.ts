import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-earning-graph-vector',
	templateUrl: './vector.component.html',
	styleUrls: ['./vector.component.scss']
})
export class VectorComponent implements OnInit {

	options = {
		map: 'us_lcc_en',
		scaleColors: ['#C8EEFF', '#0071A4'],
		normalizeFunction: 'polynomial',
		focusOn: {
			x: 5,
			y: 1,
			scale: 1
		},
		zoomOnScroll: false,
		zoomMin: 0.85,
		hoverColor: false,
		regionStyle: {
			initial: {
				fill: '#ededed',
				"fill-opacity": 1,
				stroke: '#a5ded9',
				"stroke-width": 0,
				"stroke-opacity": 0
			},
			hover: {
					
			}
		},
		markerStyle: {
			initial: {
				fill: '#e68c71',
				stroke: 'rgba(230,140,110,.8)',
				"fill-opacity": 1,
				"stroke-width": 9,
				"stroke-opacity": 0.5,
				r: 3
			},
			hover: {
				stroke: 'black',
				"stroke-width": 2
			},
			selected: {
				fill: 'blue'
			},
			selectedHover: {}
		},
		backgroundColor: '#ffffff',
		markers: [
			{
				latLng: [35.85, -77.88],
				name: 'Rocky Mt,NC'
			}, {
				latLng: [32.90, -97.03],
				name: 'Dallas/FW,TX'
			}, {
				latLng: [39.37, -75.07],
				name: 'Millville,NJ'
			}

		],
		series: {
			markers: [{
				attribute: 'r',
				scale: [3, 7],
				values: [ 500.70, 410.16, 210.69, 120.17, 64.31, 150.35, 130.22, 120.71, 300.32 ]
			}]
		}
	};

	constructor() { }

	ngOnInit() {
		if ($("#world-map").length) {
			$('#world-map').vectorMap( this.options );
		}
	}

}
