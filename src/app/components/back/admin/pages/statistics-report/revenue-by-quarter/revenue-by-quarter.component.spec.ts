import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueByQuarterComponent } from './revenue-by-quarter.component';

describe('RevenueByQuarterComponent', () => {
  let component: RevenueByQuarterComponent;
  let fixture: ComponentFixture<RevenueByQuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueByQuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueByQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
