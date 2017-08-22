import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSaleComponent } from './private-sale.component';

describe('PrivateSaleComponent', () => {
  let component: PrivateSaleComponent;
  let fixture: ComponentFixture<PrivateSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
