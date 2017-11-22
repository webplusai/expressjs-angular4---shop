import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'admin-revenue-over-time',
	templateUrl: './revenue-over-time.component.html',
	styleUrls: ['./revenue-over-time.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RevenueOverTimeComponent implements OnInit {

	constructor() { }

	data1 = [];
	totalPoints = 300;

    getData() {
        this.data1.shift();
        while (this.data1.length < this.totalPoints) {
            var prev = this.data1.length > 0 ? this.data1[this.data1.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            y = y < 0 ? 0 : (y > 100 ? 100 : y);
            this.data1.push(y);
        }
        var result = [];
        for (var i = 0; i < this.data1.length; ++i) {
            result.push([i, this.data1[i]])
        }
        return result;
    }

	ngOnInit() {

		var day_data = [
		    { "elapsed": "", "value": 8 },
		    { "elapsed": "", "value": 13 },
		    { "elapsed": "", "value": 18 },
		    { "elapsed": "", "value": 20 },
		    { "elapsed": "", "value": 27 },
		    { "elapsed": "", "value": 13 },
		    { "elapsed": "", "value": 18 },
		    { "elapsed": "", "value": 20 },
		    { "elapsed": "", "value": 27 },
	    ];

		for (var i = 0; i < 5; i++ ) {
			$.plot($("#reatltime-chartContainer" + (i + 2006) ), [this.getData()], {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    shadowSize: 0
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    ticks: 10
                },
                xaxis: {
                    show: false
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "#f9f9f9",
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                colors: ["#79D1CF"],
                tooltip: true,
                tooltipOpts: {
                    defaultTheme: false
                }
            });

            Morris.Line({
		        element: 'graph-line' + (i + 1),
		        data: day_data,
		        xkey: 'elapsed',
		        ykeys: ['value'],
		        labels: ['value'],
		        lineColors: ['#1FB5AD'],
		        parseTime: false
		    });
		}
	}

}
