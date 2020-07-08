import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratitienComponent } from './pratitien.component';

describe('PratitienComponent', () => {
  let component: PratitienComponent;
  let fixture: ComponentFixture<PratitienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratitienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratitienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
