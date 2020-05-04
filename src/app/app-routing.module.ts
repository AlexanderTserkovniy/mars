import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotSeatComponent} from './mode/hot-seat/hot-seat.component';
import {ModeComponent} from './mode/mode.component';

const routes: Routes = [
  { path: '', component: ModeComponent },
  { path: 'hs', component: HotSeatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
