import { Injectable } from '@angular/core';
import {Mode} from '@app/mode/mode.typings';
import {ModeService} from '@app/mode/mode.service';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {Player} from '@app/class/player';
import {Corporation} from '@app/corporation/corporation.typings';
import {map, mergeAll} from 'rxjs/operators';
import filterEmptyFromObject from '@app/utils/filter-empty';

export const DEFAULT_NUMBER_OF_PLAYERS = 2;
export const DEFAULT_POSSIBLE_NUMBER_OF_PLAYERS = [1, 2, 3, 4, 5];

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public possibleNumberOfPlayers: number[] = DEFAULT_POSSIBLE_NUMBER_OF_PLAYERS;
  public numberOfPlayers: number = DEFAULT_NUMBER_OF_PLAYERS;
  public mode$: Observable<Mode> = this.modeService.getChosenMode();

  private players$: BehaviorSubject<[] | Player[]> = new BehaviorSubject<[] | Player[]>([]);
  private unsubs: Subscription[] = [];

  constructor(readonly modeService: ModeService) {}

  public createPlayers(playerNames: string[]) {
    this.players$.next(playerNames.map(playerName => new Player({ playerName })));
  }

  public getPlayers(): BehaviorSubject<Player[]> {
    return this.players$;
  }

  public userPickCorporation(player: Player, corporation: Corporation): void {
    player.corporation = corporation;
  }

  public setPlayerStartingData(player: Player) {
    const corporationWithoutFalsy = filterEmptyFromObject(player.corporation, [0, '', null, undefined]);
    const corporationNormalizedResources = Object.keys(corporationWithoutFalsy).reduce((aggr, resource) => {

      switch (true) {
        case (resource.startsWith('Inv:') || resource.startsWith('Prod:')):
          aggr[resource.toLowerCase()] = corporationWithoutFalsy[resource];
          break;

        default:
          aggr[resource] = corporationWithoutFalsy[resource];
      }

      return aggr;
    }, {});

    Object.keys(player.resources).forEach(resource => {
      const resourceInCorporation = corporationNormalizedResources[`inv: ${resource}`];
      player.resources[resource] = resourceInCorporation || player.resources[resource];
    });

    Object.keys(player.production).forEach(resource => {
      const resourceInCorporation = corporationNormalizedResources[`prod: ${resource}`];
      player.production[resource] = resourceInCorporation || player.production[resource];
    });
  }

  public start() {
    const players = this.players$
      .pipe(
        mergeAll(),
        map((pl: Player) => this.setPlayerStartingData(pl))
      );

    this.unsubs.push(players.subscribe());
  }

  public destructor() {
    /* istanbul ignore next */
    this.unsubs.forEach(subs => subs.unsubscribe());
  }
}
