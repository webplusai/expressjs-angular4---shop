import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColloborationPanelComponent } from './colloboration-panel.component';

describe('ColloborationPanelComponent', () => {
  let component: ColloborationPanelComponent;
  let fixture: ComponentFixture<ColloborationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColloborationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColloborationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
