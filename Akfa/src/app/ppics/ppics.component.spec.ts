import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpicsComponent } from './ppics.component';

describe('PpicsComponent', () => {
  let component: PpicsComponent;
  let fixture: ComponentFixture<PpicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
