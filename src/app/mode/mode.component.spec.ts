import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { ModeComponent } from './mode.component';

describe('ModeComponent', () => {
  let component: ModeComponent;
  let fixture: ComponentFixture<ModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
