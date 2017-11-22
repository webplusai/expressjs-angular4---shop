import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsReportComponent } from './statistics-report.component';

describe('StatisticsReportComponent', () => {
  let component: StatisticsReportComponent;
  let fixture: ComponentFixture<StatisticsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
