import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungGearComponent } from './samsung-gear.component';

describe('SamsungGearComponent', () => {
  let component: SamsungGearComponent;
  let fixture: ComponentFixture<SamsungGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsungGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
