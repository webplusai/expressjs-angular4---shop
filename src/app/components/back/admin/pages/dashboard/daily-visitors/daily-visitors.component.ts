import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-daily-visitors',
	templateUrl: './daily-visitors.component.html',
	styleUrls: ['./daily-visitors.component.scss']
})
export class DailyVisitorsComponent implements OnInit {

	options = {
		grid: {
            backgroundColor: {
                colors: ["#fff", "#fff"]
            },
            borderWidth: 0,
            borderColor: "#f0f0f0",
            margin: 0,
            minBorderMargin: 0,
            labelMargin: 20,
            hoverable: true,
            clickable: true
        },
        // Tooltip
        tooltip: true,
        tooltipOpts: {
            content: "%s X: %x Y: %y",
            shifts: {
                x: -60,
                y: 25
            },
            defaultTheme: false
        },

        legend: {
            labelBoxBorderColor: "#ccc",
            show: false,
            noColumns: 0
        },
        series: {
            stack: true,
            shadowSize: 0,
            highlightColor: 'rgba(30,120,120,.5)'

        },
        xaxis: {
            tickLength: 0,
            tickDecimals: 0,
            show: true,
            min: 2,

            font: {
                style: "normal",

                color: "#666666"
            }
        },
        yaxis: {
            ticks: 3,
            tickDecimals: 0,
            show: true,
            tickColor: "#f0f0f0",
            font: {
                style: "normal",
                color: "#666666"
            }
        },
        points: {
            show: true,
            radius: 2,
            symbol: "circle"
        },
        colors: ["#87cfcb", "#48a9a7"]
	};

	data = ([{
        label: "Too",
        data: [ [0, 10], [1, 20], [2, 33], [3, 24], [4, 45], [5, 96], [6, 47], [7, 18], [8, 11], [9, 13], [10, 21] ],
        lines: {
            show: true,
            fill: true,
            lineWidth: 2,
            fillColor: {
                colors: ["rgba(255,255,255,.1)", "rgba(160,220,220,.8)"]
            }
        }
    }]);

	constructor() { }

	ngOnInit() {
		$.plot($("#daily-visit-chart"), this.data, this.options);
	}

}
