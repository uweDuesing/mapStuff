import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MapStuffModule} from "map-stuff";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapStuffModule,
    MapStuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
