import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugErrorComponent } from './debug-error.component';

describe('DebugErrorComponent', () => {
  let component: DebugErrorComponent;
  let fixture: ComponentFixture<DebugErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
