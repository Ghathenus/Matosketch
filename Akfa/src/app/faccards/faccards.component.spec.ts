import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccardsComponent } from './faccards.component';

describe('FaccardsComponent', () => {
  let component: FaccardsComponent;
  let fixture: ComponentFixture<FaccardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaccardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaccardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
