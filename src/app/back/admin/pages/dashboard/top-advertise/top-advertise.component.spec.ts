import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAdvertiseComponent } from './top-advertise.component';

describe('TopAdvertiseComponent', () => {
  let component: TopAdvertiseComponent;
  let fixture: ComponentFixture<TopAdvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
