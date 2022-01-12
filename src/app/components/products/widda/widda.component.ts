import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widda',
  templateUrl: './widda.component.html',
  styleUrls: ['./widda.component.scss']
})
export class WiddaComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
