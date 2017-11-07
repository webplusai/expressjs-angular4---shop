import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionsFeesComponent } from './comissions-fees.component';

describe('ComissionsFeesComponent', () => {
  let component: ComissionsFeesComponent;
  let fixture: ComponentFixture<ComissionsFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComissionsFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissionsFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
