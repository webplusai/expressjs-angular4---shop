import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';
import { Observable } 								from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-transactions-form',
	templateUrl: './transactions-form.component.html',
	styleUrls: [ './transactions-form.component.scss' ]
})
export class TransactionsFormComponent {

	sellers = [];

	from 			= new FormControl('', [ Validators.required ]);
	to 				= new FormControl('', [ Validators.required ]);
	amount 			= new FormControl('', [ Validators.required ]);
	description 	= new FormControl('', [ ]);

	form = new FormGroup({
		from: this.from,
		to: this.to,
		amount: this.amount,
		description: this.description
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.crudService.retrieve( 'Seller' ).subscribe( result => {
			if (result.status == 'ok') {
				this.sellers = result.content;
			}
		});
	}

	saveTransaction() {
		if (this.form.valid) {
			this.form.value.model = 'Transaction';

			var queue = [];
			
			this.form.value.seller = this.form.value.to;
			queue.push(this.crudService.create(JSON.parse(JSON.stringify(this.form.value))));

			this.form.value.seller = this.form.value.from;
			this.form.value.amount = -this.form.value.amount;
			queue.push(this.crudService.create(this.form.value));

			Observable.forkJoin(queue).subscribe( res => {
				this.router.navigate(['/admin/transactions']);
			});
		}
	}
}