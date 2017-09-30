import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPricesComponent } from './special-prices.component';

describe('SpecialPricesComponent', () => {
  let component: SpecialPricesComponent;
  let fixture: ComponentFixture<SpecialPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
