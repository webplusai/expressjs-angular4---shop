import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-monthly-expense',
	templateUrl: './monthly-expense.component.html',
	styleUrls: ['./monthly-expense.component.scss']
})
export class MonthlyExpenseComponent implements OnInit {

	options = {
		lines: 12, // The number of lines to draw
        angle: 0, // The length of each line
        lineWidth: 0.48, // The line thickness
        pointer: {
            length: 0.6, // The radius of the inner circle
            strokeWidth: 0.03, // The rotation offset
            color: '#464646' // Fill color
        },
        limitMax: 'true', // If true, the pointer will not go past the end of the gauge
        colorStart: '#fa8564', // Colors
        colorStop: '#fa8564', // just experiment with them
        strokeColor: '#F1F1F1', // to see which ones work best for you
        generateGradient: true
	};

	constructor() { }

	ngOnInit() {
		var target = document.getElementById('gauge'); // your canvas element
	    let gauge = new Gauge(target).setOptions(this.options);
	    gauge.maxValue = 3000; // set max gauge value
	    gauge.animationSpeed = 32; // set animation speed (32 is default value)
	    gauge.set(1150); // set actual value
	    gauge.setTextField(document.getElementById("gauge-textfield"));
	}

}
