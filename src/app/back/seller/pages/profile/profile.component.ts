import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'seller-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	togglePopover() {
		$(".popover").toggleClass('hidden');
	}

	uploadImage() {
		$("#imgInput").trigger('click');
	}

	removeImage() {
		$(".logo-image").attr('src', 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png');
	}

	readURL(event) {
		if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
            	$('.logo-image')
                    .attr('src', (e.target as any).result)
                    .width(100)
                    .height(100);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
	}

}
