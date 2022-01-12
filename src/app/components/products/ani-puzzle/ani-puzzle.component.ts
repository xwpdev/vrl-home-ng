import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ani-puzzle',
  templateUrl: './ani-puzzle.component.html',
  styleUrls: ['./ani-puzzle.component.scss']
})
export class AniPuzzleComponent implements OnInit {

  homeSlider={items: 1, dots: true, nav: true};

  constructor() { }

  ngOnInit(): void {
  }

}
