import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

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
});
