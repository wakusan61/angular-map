import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  showMap: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.showMap = true;
  }

  onClose() {
    this.showMap = false;
  }
}
