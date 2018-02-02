import { Component, OnInit, Input, Output, EventEmitter } 	from '@angular/core';
import { FileUploader } 		from 'ng2-file-upload/ng2-file-upload';

const UPLOAD_URL = 'http://vps472567.ovh.net:3000/api/upload';
const DEFAULT_IMAGE = 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png';

@Component({
	selector: 'image-selector',
	templateUrl: './image-selector.component.html',
	styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {

	private previewImage;
	private wrapperId;

	public uploader: FileUploader = new FileUploader({url: UPLOAD_URL, itemAlias: 'image'});

	@Input() for: string;


	constructor() { }

	ngOnInit() {

		let self = this;
		this.wrapperId = '#' + this.for + '-selector';

		this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

		this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
			let data = JSON.parse(response);
			$('#' + this.for).val(data.filename);
			$(this.wrapperId + ' .image-cover').addClass('hidden');
        };

        $('#' + this.for).change(function() {
        	self.previewImage = $(this).val() ? '/uploads/' + $(this).val() : DEFAULT_IMAGE;
        });
	}

	togglePopover() {
		$(this.wrapperId + ' .popover').toggleClass('hidden');
	}

	uploadImage() {
		$(this.wrapperId + ' .img-input').trigger('click');
	}

	removeImage() {
		$(this.wrapperId + ' .image').attr('src', '');
	}

	readURL(event) {

		this.uploader.uploadAll();
		$(this.wrapperId + ' .image-cover').removeClass('hidden');

		if (event.target.files && event.target.files[0]) {
	        var reader = new FileReader();

	        reader.onload = (e) => {
	        	$(this.wrapperId + ' .image')
	                .attr('src', (e.target as any).result)
	                .width(100)
	                .height(100);
	        };

	        reader.readAsDataURL(event.target.files[0]);
	    }
	}

}
