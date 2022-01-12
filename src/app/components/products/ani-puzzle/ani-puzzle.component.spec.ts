import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniPuzzleComponent } from './ani-puzzle.component';

describe('AniPuzzleComponent', () => {
  let component: AniPuzzleComponent;
  let fixture: ComponentFixture<AniPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
