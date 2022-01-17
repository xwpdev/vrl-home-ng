import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-only',
  templateUrl: './equipment-only.component.html',
  styleUrls: ['./equipment-only.component.scss']
})
export class EquipmentOnlyComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};
  homeSlider2={items: 1, dots: false, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
