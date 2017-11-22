import { Component } from '@angular/core';

@Component({
	selector: 'admin-emhtv',
	templateUrl: './emhtv.component.html',
	styleUrls: [ './emhtv.component.scss' ]
})
export class EMHTVComponent {

	videoURL: string;
	
	showVideo() {
		$(".videoEMH").attr("src", this.videoURL);
	}
}