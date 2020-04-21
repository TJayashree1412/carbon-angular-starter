import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIbmiComponent } from './view-ibmi.component';

describe('ViewIbmiComponent', () => {
  let component: ViewIbmiComponent;
  let fixture: ComponentFixture<ViewIbmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIbmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIbmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
