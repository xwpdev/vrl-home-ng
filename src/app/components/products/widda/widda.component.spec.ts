import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddaComponent } from './widda.component';

describe('WiddaComponent', () => {
  let component: WiddaComponent;
  let fixture: ComponentFixture<WiddaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiddaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiddaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
