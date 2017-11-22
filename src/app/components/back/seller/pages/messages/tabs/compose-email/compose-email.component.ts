import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'seller-messages-tab-compose-email',
	templateUrl: './compose-email.component.html',
	styleUrls: [ './compose-email.component.scss' ]
})
export class ComposeEmailComponent {

	showCcInput() {
		$(".cc").hide();
		$(".cc-input").show();
	}

	showBccInput() {
		$(".bcc").hide();
		$(".bcc-input").show();
	}
}