import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-super-administrator-form',
	templateUrl: './super-administrator-form.component.html',
	styleUrls: [ './super-administrator-form.component.scss' ]
})
export class SuperAdministratorFormComponent{

	username = new FormControl('', [
		Validators.required
	]);

	firstName = new FormControl('', [
		Validators.required
	]);

	lastName = new FormControl('', [
		Validators.required
	]);

	email = new FormControl('', [
		Validators.required
	]);

	password = new FormControl('', [
		Validators.required
	]);

	confirm = new FormControl('', [
		Validators.required
	]);

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