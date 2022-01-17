import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcViveComponent } from './htc-vive.component';

describe('HtcViveComponent', () => {
  let component: HtcViveComponent;
  let fixture: ComponentFixture<HtcViveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtcViveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcViveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
