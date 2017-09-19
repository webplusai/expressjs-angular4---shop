import { Component, OnInit } from '@angular/core';
import * as SkyconsInitializer from 'skycons';

@Component({
	selector: 'admin-dashboard-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

	Skycons: any;

	constructor() { }

	ngOnInit() {
		var Skycons = SkyconsInitializer(this);
    	var skycons = new Skycons({
            "color": "#aec785"
        });
        skycons.add("weather", Skycons.RAIN);
        skycons.play();
        skycons.set("weather", Skycons.RAIN);
	}

}
