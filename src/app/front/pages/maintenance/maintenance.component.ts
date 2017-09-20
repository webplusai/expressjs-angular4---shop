import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-maintenance',
	templateUrl: './maintenance.component.html',
	styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

	days = 10;
	hours = 10;
	minutes = 50;
	seconds = 40;

	constructor() { }

	ngOnInit() {
		Observable.timer(0, 1000).subscribe(() => {
			this.seconds --;

			if (this.seconds < 0) {
				this.seconds = 59;
				this.minutes --;
			}

			if (this.minutes < 0) {
				this.minutes = 59;
				this.hours --;
			}

			if (this.hours < 0) {
				this.hours = 23;
				this.days --;
			}
		});
	}

}
