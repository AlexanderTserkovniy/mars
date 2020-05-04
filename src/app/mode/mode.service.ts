import {Injectable} from '@angular/core';
import {Mode} from './mode.typings';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  #modes: Mode[] = [
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
  #chosenMode: BehaviorSubject<null | number> = new BehaviorSubject<null | number>(null);
  public readonly chosenMode = this.#chosenMode.asObservable();

  constructor() {
  }

  getModes(): Observable<Mode[]> {
    return of(this.#modes);
  }

  chooseMode(id: number) {
    this.#chosenMode.next(id);
  }

  getChosenMode(): Observable<null | Mode> {
    return this.#chosenMode.pipe(
      map(val => this.#modes.find(mode => mode.id === val))
    );
  }
}
