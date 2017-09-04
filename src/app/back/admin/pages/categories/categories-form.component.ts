import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
	selector: 'admin-categories-form',
	templateUrl: './categories-form.component.html',
	styleUrls: [ './categories-form.component.scss' ]
})
export class CategoriesFormComponent {

	layouts = [ 'Account', 'Affiliate', 'Category', 'Checkout', 'Compare', 'Contact', 'Default', 'Home', 'Information', 'Manufacturer', 'Product', 'Search', 'Sitemap' ];

	displayedColumns = ['stores', 'layout'];
	dataSource = new CategoriesDataSource();
	
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

export class CategoriesDataSource extends DataSource<any> {
	connect(): Observable<any> {
		return Observable.of( [{stores: 'Default'}] );
	}

	disconnect() {}
}