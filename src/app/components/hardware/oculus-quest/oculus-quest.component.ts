import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oculus-quest',
  templateUrl: './oculus-quest.component.html',
  styleUrls: ['./oculus-quest.component.scss']
})
export class OculusQuestComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};
  homeSlider2={items: 1, dots: false, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
