import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-options-form',
	templateUrl: './options-form.component.html',
	styleUrls: ['./options-form.component.scss']
})
export class OptionsFormComponent implements OnInit {

	displayedColumns = ['option_value_name', 'image', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource : OptionValueDataSource | null;
	optionTypes = [ 'Select', 'Radio', 'Checkbox', 'Text', 'Textarea', 'File', 'Date', 'Time', 'Date & Time' ];

	optionValueList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.optionValueList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new OptionValueDataSource(this.tableData);
	}

	addRow() {
		this.optionValueList.push( {filter_name: '', sort_order: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.optionValueList.splice(index, 1);
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

export class OptionValueDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange
		];
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}
