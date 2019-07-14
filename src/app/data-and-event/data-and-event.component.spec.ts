import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndEventComponent } from './data-and-event.component';

describe('DataAndEventComponent', () => {
  let component: DataAndEventComponent;
  let fixture: ComponentFixture<DataAndEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAndEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
