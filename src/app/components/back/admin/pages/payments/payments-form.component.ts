import { Component } 								from 	'@angular/core';
import { FormGroup, FormControl, Validators} 		from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 			from 	'@angular/router';

import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-payments-form',
	templateUrl: './payments-form.component.html',
	styleUrls: [ './payments-form.component.scss' ]
})
export class PaymentsFormComponent {

	private paymentMethodId;

	paymentMethods = [ 
		'Amazon Payments',
		'Authroize.net(AIM)',
		'BluePay Hosted From',
		'First Data',
		'Klarna Account',
		'LIQPAY',
		'Moneybookers',
		'NOCHEX',
		'Paypal Pro',
		'Realex Remote',
		'SagePay Direct',
		'Secure Trading',
		'2Checkout',
		'Web Payment Software',
		'World Pay'
	];

	name 		= new FormControl('', [ Validators.required ]);
	logo 		= new FormControl('', []);
	status 		= new FormControl('', []);
	sort_order 	= new FormControl('', []);

	form = new FormGroup({
		name:			this.name,
		logo:			this.logo,
		status:			this.status,
		sort_order:		this.sort_order
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.paymentMethodId = params['id'];

			if (this.paymentMethodId) {
				this.crudService.retrieveOne( 'PaymentMethod', this.paymentMethodId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
				});
			}
		});
	}

	savePaymentMethod() {
		if (this.form.valid) {
			this.form.value.model = 'PaymentMethod';

			let action = this.paymentMethodId ? this.crudService.update( this.form.value, this.paymentMethodId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/payments']);
			});
		}
	}

	togglePopover() {
		$(".popover").toggleClass('hidden');
	}

	uploadImage() {
		$("#imgInput").trigger('click');
	}

	removeImage() {
		$(".category-image").attr('src', 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png');
	}

	readURL(event) {
		if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
            	$('.category-image')
                    .attr('src', (e.target as any).result)
                    .width(100)
                    .height(100);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
	}

}