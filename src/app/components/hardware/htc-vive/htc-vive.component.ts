import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htc-vive',
  templateUrl: './htc-vive.component.html',
  styleUrls: ['./htc-vive.component.scss']
})
export class HtcViveComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};
  homeSlider2={items: 1, dots: false, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
