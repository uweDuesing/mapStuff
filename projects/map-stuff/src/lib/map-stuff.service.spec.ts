import { TestBed } from '@angular/core/testing';

import { MapStuffService } from './map-stuff.service';

describe('MapStuffService', () => {
  let service: MapStuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapStuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
