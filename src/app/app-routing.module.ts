import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotSeatComponent} from './mode/hot-seat/hot-seat.component';
import {ModeComponent} from './mode/mode.component';
import {HotSeatStartComponent} from '@app/mode/hot-seat-start/hot-seat-start.component';
import ROUTES from '@app/constants/routes';

const routes: Routes = [
  { path: '', component: ModeComponent },
  { path: ROUTES.HOT_SEAT, component: HotSeatComponent },
  { path: `${ROUTES.HOT_SEAT}/${ROUTES.GAME_START}`, component: HotSeatStartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
