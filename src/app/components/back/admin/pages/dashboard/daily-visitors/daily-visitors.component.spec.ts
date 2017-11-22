import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVisitorsComponent } from './daily-visitors.component';

describe('DailyVisitorsComponent', () => {
  let component: DailyVisitorsComponent;
  let fixture: ComponentFixture<DailyVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
