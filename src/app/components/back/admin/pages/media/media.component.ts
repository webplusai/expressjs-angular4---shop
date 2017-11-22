import { Component } from '@angular/core';

@Component({
	selector: 'admin-media',
	templateUrl: './media.component.html',
	styleUrls: [ './media.component.scss' ]
})
export class MediaComponent {
	
	allList = [
		{ type: 'img', name: 'img01.jpg', link: 'assets/img/product1.png' },
		{ type: 'doc', name: 'doc02.doc' },
		{ type: 'img', name: 'img02.jpg', link: 'assets/img/product2.png' },
		{ type: 'aud', name: 'snd02.mp3' },
		{ type: 'aud', name: 'snd04.mp3' },
		{ type: 'vid', name: 'mov02.avi' },
		{ type: 'doc', name: 'doc01.doc' },
		{ type: 'img', name: 'img03.jpg', link: 'assets/img/product3.png' },
		{ type: 'vid', name: 'mov03.avi' },
		{ type: 'img', name: 'img04.jpg', link: 'assets/img/product4.png' },
		{ type: 'vid', name: 'mov01.avi' },
		{ type: 'doc', name: 'doc03.doc' },
		{ type: 'aud', name: 'snd03.mp3' },
		{ type: 'img', name: 'img05.jpg', link: 'assets/img/product5.png' },
		{ type: 'aud', name: 'snd01.mp3' },
		{ type: 'doc', name: 'doc04.doc' },
	];

	imgList = [
		{ type: 'img', name: 'img01.jpg', link: 'assets/img/product1.png' },
		{ type: 'img', name: 'img02.jpg', link: 'assets/img/product2.png' },
		{ type: 'img', name: 'img03.jpg', link: 'assets/img/product3.png' },
		{ type: 'img', name: 'img04.jpg', link: 'assets/img/product4.png' },
		{ type: 'img', name: 'img05.jpg', link: 'assets/img/product5.png' },
	];

	audList = [
		{ type: 'aud', name: 'snd02.mp3' },
		{ type: 'aud', name: 'snd04.mp3' },
		{ type: 'aud', name: 'snd03.mp3' },
		{ type: 'aud', name: 'snd01.mp3' },
	];

	vidList = [
		{ type: 'vid', name: 'mov02.avi' },
		{ type: 'vid', name: 'mov03.avi' },
		{ type: 'vid', name: 'mov01.avi' },
	];

	docList = [
		{ type: 'doc', name: 'doc02.doc' },
		{ type: 'doc', name: 'doc01.doc' },
		{ type: 'doc', name: 'doc03.doc' },
		{ type: 'doc', name: 'doc04.doc' },
	];
}