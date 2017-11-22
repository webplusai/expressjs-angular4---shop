import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDateComponent } from './delivery-date.component';

describe('DeliveryDateComponent', () => {
  let component: DeliveryDateComponent;
  let fixture: ComponentFixture<DeliveryDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
