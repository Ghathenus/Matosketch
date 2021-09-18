import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreditComponent } from './predit.component';

describe('PreditComponent', () => {
  let component: PreditComponent;
  let fixture: ComponentFixture<PreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
