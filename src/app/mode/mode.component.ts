import { Component, OnInit } from '@angular/core';
import {ModeService} from './mode.service';
import {Mode} from './mode.typings';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {

  public modes$: Observable<Mode[]>;

  constructor(public modeService: ModeService) {
    this.modes$ = this.modeService.getModes();
  }

  ngOnInit(): void {
  }

  trackByFn(_, mode: Mode): number {
    return mode.id;
  }

  chooseMode(id: number) {
    this.modeService.chooseMode(id);
  }

}
