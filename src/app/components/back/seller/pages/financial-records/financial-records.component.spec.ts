import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRecordsComponent } from './financial-records.component';

describe('FinancialRecordsComponent', () => {
  let component: FinancialRecordsComponent;
  let fixture: ComponentFixture<FinancialRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
