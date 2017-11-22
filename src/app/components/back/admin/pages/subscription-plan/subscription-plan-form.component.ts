import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'admin-subscription-plan-form',
	templateUrl: './subscription-plan-form.component.html',
	styleUrls: [ './subscription-plan-form.component.scss' ]
})
export class SubscriptionPlanFormComponent {

	expireInput = new FormControl('', [
		Validators.required
	]);

	trialInput = new FormControl('', [
		Validators.required
	]);

	productInput = new FormControl('', [
		Validators.required
	]);

	priceInput = new FormControl('', [
		Validators.required
	]);

	durationInput = new FormControl('', [
		Validators.required
	]);

	cycleInput = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		expireInput: this.expireInput,
		trialInput: this.trialInput,
		productInput: this.productInput,
		priceInput: this.priceInput,
		durationInput: this.durationInput,
		cycleInput: this.cycleInput
	});

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

	createGroup() {
	
	}
}