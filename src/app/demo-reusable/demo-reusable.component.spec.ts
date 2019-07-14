import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReusableComponent } from './demo-reusable.component';

describe('DemoReusableComponent', () => {
  let component: DemoReusableComponent;
  let fixture: ComponentFixture<DemoReusableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReusableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
