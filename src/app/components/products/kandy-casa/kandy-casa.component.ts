import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kandy-casa',
  templateUrl: './kandy-casa.component.html',
  styleUrls: ['./kandy-casa.component.scss']
})
export class KandyCasaComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
