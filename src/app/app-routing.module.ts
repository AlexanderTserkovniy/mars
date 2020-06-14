import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotSeatComponent} from './mode/hot-seat/hot-seat.component';
import {ModeComponent} from './mode/mode.component';
import {HotSeatStartComponent} from '@app/mode/hot-seat-start/hot-seat-start.component';
import ROUTES from '@app/constants/routes';
import {GameComponent} from '@app/game/game.component';

const routes: Routes = [
  { path: '', component: ModeComponent },
  { path: ROUTES.HOT_SEAT, component: HotSeatComponent },
  // TODO Refactor this to corporation choice component
  { path: `${ROUTES.HOT_SEAT}/${ROUTES.GAME_START}`, component: HotSeatStartComponent },
  { path: `${ROUTES.HOT_SEAT}/${ROUTES.GAME}`, component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
