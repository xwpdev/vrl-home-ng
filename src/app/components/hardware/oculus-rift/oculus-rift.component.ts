import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oculus-rift',
  templateUrl: './oculus-rift.component.html',
  styleUrls: ['./oculus-rift.component.scss']
})
export class OculusRiftComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};
  homeSlider2={items: 1, dots: false, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
