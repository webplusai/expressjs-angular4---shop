import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStatisticsComponent } from './mini-statistics.component';

describe('MiniStatisticsComponent', () => {
  let component: MiniStatisticsComponent;
  let fixture: ComponentFixture<MiniStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
