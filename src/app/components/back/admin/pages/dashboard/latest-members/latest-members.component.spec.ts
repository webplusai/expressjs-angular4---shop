import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMembersComponent } from './latest-members.component';

describe('LatestMembersComponent', () => {
  let component: LatestMembersComponent;
  let fixture: ComponentFixture<LatestMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
