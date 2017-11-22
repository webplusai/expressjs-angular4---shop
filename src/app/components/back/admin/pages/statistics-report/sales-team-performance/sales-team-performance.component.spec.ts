import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTeamPerformanceComponent } from './sales-team-performance.component';

describe('SalesTeamPerformanceComponent', () => {
  let component: SalesTeamPerformanceComponent;
  let fixture: ComponentFixture<SalesTeamPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
