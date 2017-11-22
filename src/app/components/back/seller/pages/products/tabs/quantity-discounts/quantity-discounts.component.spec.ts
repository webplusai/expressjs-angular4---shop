import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityDiscountsComponent } from './quantity-discounts.component';

describe('QuantityDiscountsComponent', () => {
  let component: QuantityDiscountsComponent;
  let fixture: ComponentFixture<QuantityDiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityDiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
