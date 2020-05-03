import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

import {ModeComponent} from './mode/mode.component';
import {AppRoutingModule} from './app-routing.module';
import {HotSeatComponent} from './hot-seat/hot-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    ModeComponent,
    HotSeatComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
