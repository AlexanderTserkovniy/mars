import { Component, OnInit } from '@angular/core';
import {ModeService} from './mode.service';
import {Mode} from './mode.typings';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {

  public modes$: Observable<Mode[]>;

  constructor(public modeService: ModeService, private router: Router) {
    this.modes$ = this.modeService.getModes();
  }

  ngOnInit(): void {
  }

  trackByFn(_, mode: Mode): number {
    return mode.id;
  }

  chooseMode(id: number) {
    this.modeService.chooseMode(id);
    this.router.navigate(['hs']);
  }

}
