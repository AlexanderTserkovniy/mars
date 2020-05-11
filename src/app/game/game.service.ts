import { Injectable } from '@angular/core';
import {Mode} from '@app/mode/mode.typings';
import {ModeService} from '@app/mode/mode.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Player} from '@app/classes/player';

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

  constructor(readonly modeService: ModeService) {}

  public createPlayers(playerNames: string[]) {
    this.players$.next(playerNames.map(playerName => new Player({ playerName })));
  }

  public getPlayers(): BehaviorSubject<Player[]> {
    return this.players$;
  }
}
