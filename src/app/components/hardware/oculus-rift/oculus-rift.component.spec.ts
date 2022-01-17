import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OculusRiftComponent } from './oculus-rift.component';

describe('OculusRiftComponent', () => {
  let component: OculusRiftComponent;
  let fixture: ComponentFixture<OculusRiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OculusRiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OculusRiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
