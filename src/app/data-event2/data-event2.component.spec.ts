import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEvent2Component } from './data-event2.component';

describe('DataEvent2Component', () => {
  let component: DataEvent2Component;
  let fixture: ComponentFixture<DataEvent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEvent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEvent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
