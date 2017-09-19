import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectiveLabelComponent } from './prospective-label.component';

describe('ProspectiveLabelComponent', () => {
  let component: ProspectiveLabelComponent;
  let fixture: ComponentFixture<ProspectiveLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectiveLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectiveLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
