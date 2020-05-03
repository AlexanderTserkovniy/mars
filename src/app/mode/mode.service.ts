import {Injectable} from '@angular/core';
import {Mode} from './mode.typings';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private modes: Mode[] = [
    {
      id: 1,
      name: 'hot seat',
      isEnabled: true,
    },
    {
      id: 2,
      name: 'single player',
      isEnabled: false,
    },
    {
      id: 3,
      name: 'online',
      isEnabled: false,
    }
  ];
  #chosenMode: null | number = null;

  constructor() {
  }

  getModes(): Observable<Mode[]> {
    return of(this.modes);
  }

  chooseMode(id: number) {
    this.#chosenMode = id;
  }

  getChosenMode(): null | Mode {
    return this.#chosenMode && this.modes.find(mode => mode.id === this.#chosenMode);
  }
}
