import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-top-advertise',
	templateUrl: './top-advertise.component.html',
	styleUrls: ['./top-advertise.component.scss']
})
export class TopAdvertiseComponent implements OnInit {

	data = [{
        label: "Samsung",
        data: 50
    }, {
        label: "Nokia",
        data: 50
    }, {
        label: "Syphony",
        data: 100
    }];

    options = {
		series: {
            pie: {
                innerRadius: 0.7,
                show: true,
                stroke: {
                    width: 0.1,
                    color: '#ffffff'
                }
            }

        },

        legend: {
            show: true
        },
        grid: {
            hoverable: true,
            clickable: true
        },

        colors: ["#ffdf7c", "#b2def7", "#efb3e6"]
	};

	constructor() { }

	ngOnInit() {
		$.plot($(".sm-pie"), this.data, this.options);
	}

}
