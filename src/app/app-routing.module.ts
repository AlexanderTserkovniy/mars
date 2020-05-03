import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotSeatComponent} from './hot-seat/hot-seat.component';
import {ModeComponent} from './mode/mode.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: ModeComponent },
  { path: 'hs', component: HotSeatComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
