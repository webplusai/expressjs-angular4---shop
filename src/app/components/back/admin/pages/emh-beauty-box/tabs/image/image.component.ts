import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

	displayedColumns = ['additional_images', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource : ImageDataSource | null;

	dataSourceMain : ImageDataSource | null;

	mainImage = [ { additional_image: 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png' } ];
	imageList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.tableData = new TableData();
		this.tableData.setData( this.mainImage );
		this.dataSourceMain = new ImageDataSource(this.tableData);

		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.imageList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new ImageDataSource(this.tableData);
	}

	addRow() {
		this.imageList.push( {additional_image: 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png', sort_order: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.imageList.splice(index, 1);
		this.redrawTable();
	}

	togglePopover(e) {
		var f = $(e.target).closest(".image").find(".popover").is(":visible");
		$(".popover").addClass('hidden');
		if (!f) {
			$(e.target).closest(".image").find(".popover").toggleClass('hidden');
		}
	}

	uploadImage(e) {
		$(e.target).closest(".image").find("#imgInput").trigger('click');
	}

	removeImage(e) {
		$(e.target).closest(".image").find("img").attr('src', 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png');
	}

	readURL(event) {
		if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
            	$(event.target).closest(".image").find('img')
                    .attr('src', (e.target as any).result)
                    .width(100)
                    .height(100);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
	}

}

export class ImageDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}
