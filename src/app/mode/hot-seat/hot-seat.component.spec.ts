import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSeatComponent } from './hot-seat.component';

describe('HotSeatComponent', () => {
  let component: HotSeatComponent;
  let fixture: ComponentFixture<HotSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
