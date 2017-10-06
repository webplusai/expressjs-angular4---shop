import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueOverTimeComponent } from './revenue-over-time.component';

describe('RevenueOverTimeComponent', () => {
  let component: RevenueOverTimeComponent;
  let fixture: ComponentFixture<RevenueOverTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueOverTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
