import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';

@Component({
  selector: 'admin-product-tab-option-tab-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateTimeComponent implements OnInit {

  constructor() { }

  value: Date;

  ngOnInit() {
  }

}
