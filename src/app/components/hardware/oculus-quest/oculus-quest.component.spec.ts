import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OculusQuestComponent } from './oculus-quest.component';

describe('OculusQuestComponent', () => {
  let component: OculusQuestComponent;
  let fixture: ComponentFixture<OculusQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OculusQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OculusQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
