import { NgModule } from '@angular/core';
import { MapStuffComponent } from './map-stuff.component';
import { MarkMapComponent } from './mark-map/mark-map.component';



@NgModule({
  declarations: [MapStuffComponent, MarkMapComponent],
  imports: [
  ],
  exports: [MapStuffComponent, MarkMapComponent]
})
export class MapStuffModule { }
