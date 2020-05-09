import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as Leaf from 'leaflet';
@Component({
  selector: 'uwe-markerMap',
  templateUrl: './mark-map.component.html',
  styleUrls: [
    './mark-map.component.css',
    '../../../node_modules/leaflet/dist/leaflet.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MarkMapComponent implements OnInit , AfterViewInit{

  @Input() accessToken: string;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const mymap = Leaf.map('uwe-marker-map').setView([51.505, -0.09], 13);
    Leaf.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: this.accessToken
    }).addTo(mymap);
  }

}
