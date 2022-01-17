import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung-gear',
  templateUrl: './samsung-gear.component.html',
  styleUrls: ['./samsung-gear.component.scss']
})
export class SamsungGearComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};
  homeSlider2={items: 1, dots: false, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
