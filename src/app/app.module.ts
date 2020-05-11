import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

import {ModeComponent} from './mode/mode.component';
import {AppRoutingModule} from './app-routing.module';
import {HotSeatComponent} from './mode/hot-seat/hot-seat.component';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NumberToArrayPipe} from './pipes/number-to-array.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HotSeatStartComponent } from './mode/hot-seat-start/hot-seat-start.component';

@NgModule({
  declarations: [
    AppComponent,
    ModeComponent,
    HotSeatComponent,
    NumberToArrayPipe,
    HotSeatStartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
