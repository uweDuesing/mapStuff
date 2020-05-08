import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// for development only:
// import the module directly from the source code to get the latest code changes when developing. The
// app will recompile when changes in the library are applied
import {MapStuffModule} from "../../../map-stuff/src/lib/map-stuff.module";
// importing the module 'node_modules' style is possible, it will however always import the module from the 'dist' folder.
// That means to see latest changes library needs to be rebuild!
// import {MapStuffModule} from "map-stuff"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapStuffModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
