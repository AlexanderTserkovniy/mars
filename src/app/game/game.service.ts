import { Injectable } from '@angular/core';
import {Mode} from '../mode/mode.typings';
import {ModeService} from '../mode/mode.service';
import {Observable, of} from 'rxjs';

export const DEFAULT_NUMBER_OF_PLAYERS = 2;
export const DEFAULT_POSSIBLE_NUMBER_OF_PLAYERS = [1, 2, 3, 4, 5];

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public possibleNumberOfPlayers: number[] = DEFAULT_POSSIBLE_NUMBER_OF_PLAYERS;
  public numberOfPlayers: number = DEFAULT_NUMBER_OF_PLAYERS;
  public mode$: Observable<Mode> = this.modeService.getChosenMode();

  constructor(readonly modeService: ModeService) {}
}
