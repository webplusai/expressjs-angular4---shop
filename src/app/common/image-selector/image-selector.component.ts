import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'image-selector',
	templateUrl: './image-selector.component.html',
	styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {

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
		$(".image").attr('src', '');
	}

	readURL(event) {
		if (event.target.files && event.target.files[0]) {
	        var reader = new FileReader();

	        reader.onload = (e) => {
	        	$('.image')
	                .attr('src', (e.target as any).result)
	                .width(100)
	                .height(100);
	        };

	        reader.readAsDataURL(event.target.files[0]);
	    }
	}

}
