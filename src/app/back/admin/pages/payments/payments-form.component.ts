import { Component } from '@angular/core';

@Component({
	selector: 'admin-payments-form',
	templateUrl: './payments-form.component.html',
	styleUrls: [ './payments-form.component.scss' ]
})
export class PaymentsFormComponent {

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