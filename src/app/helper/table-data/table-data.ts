import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class TableData {
	dataChange:  BehaviorSubject<any> = new BehaviorSubject<any>([]);
	get data(): any { return this.dataChange.value; }

	constructor() { }

	setData(dataList) {
		this.dataChange.next(dataList);
	}
}
