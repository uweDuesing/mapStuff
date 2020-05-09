import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkMapComponent } from './mark-map.component';

describe('MarkMapComponent', () => {
  let component: MarkMapComponent;
  let fixture: ComponentFixture<MarkMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
