import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticRightSidebarComponent } from './statistic-right-sidebar.component';

describe('StatisticRightSidebarComponent', () => {
  let component: StatisticRightSidebarComponent;
  let fixture: ComponentFixture<StatisticRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
