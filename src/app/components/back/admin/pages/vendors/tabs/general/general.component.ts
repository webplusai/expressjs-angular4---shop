import { Component, OnInit, Input } 					from '@angular/core';
import { FormControl, Validators, FormGroup } 			from '@angular/forms';

import { CRUDService } 									from 	'../../../../../../../services/crud.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'admin-vendors-tab-general',
	templateUrl: './general.component.html',
	styleUrls: ['./general.component.scss']
})
export class VendorGeneralComponent implements OnInit {

	buyers = [];
	seller_groups = [];

	@Input() general: FormGroup;

	constructor(private crudService: CRUDService) { }

	ngOnInit() {
		this.crudService.retrieve( 'Buyer' ).subscribe( result => {
			if (result.status == 'ok') {
				this.buyers = result.content;
			}
		});

		this.crudService.retrieve( 'SellerGroup' ).subscribe( result => {
			if (result.status == 'ok') {
				this.seller_groups = result.content;
			}
		});
	}

}
