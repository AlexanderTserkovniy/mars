import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotSeatStartComponent } from './hot-seat-start.component';

describe('HotSeatStartComponent', () => {
  let component: HotSeatStartComponent;
  let fixture: ComponentFixture<HotSeatStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotSeatStartComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSeatStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should chooseCorporation', () => {
    expect(component.chooseCorporation({})).toBe(void 0);
  });

  // This shit does not work because `import {environment} from '@env/environment';` cannot be mocked
  xit('should avoid fixture creation if production', () => {
    expect(component).toBeTruthy();
  });
});
