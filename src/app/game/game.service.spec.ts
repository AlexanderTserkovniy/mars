import { TestBed } from '@angular/core/testing';
import {Observable} from 'rxjs';

import { GameService } from './game.service';
import {Corporation} from '@app/corporation/corporation.typings';
import { map, mergeAll, pairwise} from 'rxjs/operators';
import {Player} from '@app/class/player';

// @ts-ignore
const corporationMock: Corporation = {
  'Inv: Megacredit': 57,
  'Inv: Titanium': 10,
  'Inv: Steel': 5,
  'Card #': 'aslfjh',

  'Prod: Megacredit': 2,
  'Prod: Titanium': 13,
  'Prod: Steel': 31,
};
// @ts-ignore
const corporationMock2: Corporation = {
  'Inv: Megacredit': 47,
  // @ts-ignore
  'Inv: Titanium': 13,
  'Inv: Steel': 20,
  'Card #': 'aslfjh2',

  'Prod: Megacredit': 4,
  'Prod: Titanium': 16,
  'Prod: Steel': 17,
};

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

  it('should correctly pick corporation', () => {
    const subs = service.getPlayers()
      .pipe(
        mergeAll(),
        map((pl, index) => {
          if (index === 1) {
            service.userPickCorporation(pl, corporationMock2);
          } else {
            service.userPickCorporation(pl, corporationMock);
          }
          return pl;
        }),
        pairwise()
      );

    service.createPlayers(['player1', 'player2']);

    subs.subscribe((players: Player[]) => {

      expect(players[0].corporation['Inv: Megacredit']).toEqual(57);
      expect(players[1].corporation['Inv: Megacredit']).toEqual(47);
      expect(players[0].corporation['Inv: Titanium']).toEqual(10);
      // @ts-ignore
      expect(players[1].corporation['Inv: Titanium']).toEqual(13);
      expect(players[0].corporation['Inv: Steel']).toEqual(5);
      expect(players[1].corporation['Inv: Steel']).toEqual(20);

      expect(players[0].corporation['Prod: Megacredit']).toEqual(2);
      expect(players[1].corporation['Prod: Megacredit']).toEqual(4);
      expect(players[0].corporation['Prod: Titanium']).toEqual(13);
      expect(players[1].corporation['Prod: Titanium']).toEqual(16);
      expect(players[0].corporation['Prod: Steel']).toEqual(31);
      expect(players[1].corporation['Prod: Steel']).toEqual(17);
    });
  });

  it('should correctly set starting resources values including data from corporation', () => {
    service.createPlayers(['player1', 'player2']);

    const players = service.getPlayers().getValue();

    service.userPickCorporation(players[0], corporationMock);
    service.userPickCorporation(players[1], corporationMock2);
    service.start();

    expect(players[0].resources.megacredit).toEqual(57);
    expect(players[1].resources.megacredit).toEqual(47);
    expect(players[0].resources.titanium).toEqual(10);
    expect(players[1].resources.titanium).toEqual(13);
    expect(players[0].resources.steel).toEqual(5);
    expect(players[1].resources.steel).toEqual(20);

    expect(players[0].production.megacredit).toEqual(2);
    expect(players[1].production.megacredit).toEqual(4);
    // @ts-ignore
    expect(players[0].production.titanium).toEqual(13);
    expect(players[1].production.titanium).toEqual(16);
    expect(players[0].production.steel).toEqual(31);
    expect(players[1].production.steel).toEqual(17);
  });

  it('should run destructor without issues', () => {
    expect(service.destructor.bind(service)).not.toThrow();
  });
});
