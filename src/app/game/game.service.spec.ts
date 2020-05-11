import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import {Observable} from 'rxjs';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create players using names', () => {
    const boundCall = service.createPlayers.bind(service, ['Player name 1', 'Player name 2']);
    expect(boundCall).not.toThrow();
  });

  it('should return players observable', () => {
    expect(service.getPlayers()).toBeInstanceOf(Observable);
  });

  it('should properly update players observable', () => {
    service.createPlayers(['asf', 'asf2']);
    const players = service.getPlayers().getValue();
    expect(players[0].playerName).toEqual('asf');
    expect(players[1].playerName).toEqual('asf2');
  });
});
