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

  it('should have onPlayerNumberChoose working', () => {
    expect(component.onPlayerNumberChoose.bind(component)).not.toThrow();
  });

  it('should correctly go to the next step', () => {
    component.onPlayersNumberChoiceFinish();
    expect(component.step).toEqual(1);
  });

  it('should correctly set player names', () => {
    component.onPlayersNumberChoiceFinish();
    expect(component.players).toEqual(['Player #1', 'Player #2']);
  });

  it('should finish players creating via GameService createPlayers method', () => {
    const spy = spyOn(component.gameService, 'createPlayers');
    component.onPlayersNamesEditFinish();
    expect(component.gameService.createPlayers).toHaveBeenCalledTimes(1);
  });
});
