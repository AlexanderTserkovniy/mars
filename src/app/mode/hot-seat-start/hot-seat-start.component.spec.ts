import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotSeatStartComponent } from './hot-seat-start.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HotSeatStartComponent', () => {
  let component: HotSeatStartComponent;
  let fixture: ComponentFixture<HotSeatStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotSeatStartComponent
      ],
      imports: [
        RouterTestingModule
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

  it('should corporationsChosen flag switch to work', () => {
    expect(component.corporationsChosen).toEqual(false);
  });

  it('should finish subscription when corporations are chosen', () => {
    expect(component.corporationsChosen).toEqual(false);

    if (!component.gameService.getPlayers().getValue().length) {
      component.gameService.createPlayers(['asfas', 'asfasfa']);
    }

    component.gameService.getPlayers().getValue()
      .forEach(() => {
        // @ts-ignore
        component.chooseCorporation({});
      });

    expect(component.corporationsChosen).toEqual(true);
  });

  it('should have track function to correctly for each... honestly it is a Angular shit...', () => {
    expect(component.track).toBeTruthy();
    // @ts-ignore
    expect(component.track(null, {'Card Name': 'For track function to reach'})).toEqual('For track function to reach');
  });

  // This shit does not work because `import {environment} from '@env/environment';` cannot be mocked
  xit('should avoid fixture creation if production', () => {
    expect(component).toBeTruthy();
  });
});
