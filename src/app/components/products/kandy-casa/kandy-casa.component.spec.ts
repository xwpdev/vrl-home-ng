import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandyCasaComponent } from './kandy-casa.component';

describe('KandyCasaComponent', () => {
  let component: KandyCasaComponent;
  let fixture: ComponentFixture<KandyCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KandyCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KandyCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
