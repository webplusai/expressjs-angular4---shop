import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExtraComponent } from './product-extra.component';

describe('ProductExtraComponent', () => {
  let component: ProductExtraComponent;
  let fixture: ComponentFixture<ProductExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
