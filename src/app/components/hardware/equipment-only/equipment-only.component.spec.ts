import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentOnlyComponent } from './equipment-only.component';

describe('EquipmentOnlyComponent', () => {
  let component: EquipmentOnlyComponent;
  let fixture: ComponentFixture<EquipmentOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
