import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-sell',
	templateUrl: './sell.component.html',
	styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

	data = {
    	onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: "#f8a20f",
        lineWidth: 5,
        size: 80,
        trackColor: "#efefef",
        scaleColor: "#cccccc"
    }

	constructor() { }

	ngOnInit() {
		new EasyPieChart(document.getElementById('epie-chart'), this.data).update(45);
	}

}
