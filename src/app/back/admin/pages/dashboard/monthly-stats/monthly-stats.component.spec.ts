import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyStatsComponent } from './monthly-stats.component';

describe('MonthlyStatsComponent', () => {
  let component: MonthlyStatsComponent;
  let fixture: ComponentFixture<MonthlyStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
