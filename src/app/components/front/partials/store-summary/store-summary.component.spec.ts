import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSummaryComponent } from './store-summary.component';

describe('StoreSummaryComponent', () => {
  let component: StoreSummaryComponent;
  let fixture: ComponentFixture<StoreSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
