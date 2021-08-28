import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAPS_API_LOADED} from '../load-maps-api/load-maps-api.module';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html'
})
export class MapComponent implements OnInit {

  @Output() public closeMap = new EventEmitter();

  constructor(@Inject(MAPS_API_LOADED) public apiLoaded) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.closeMap.emit();
  }
}
