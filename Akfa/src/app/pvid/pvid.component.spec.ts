import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvidComponent } from './pvid.component';

describe('PvidComponent', () => {
  let component: PvidComponent;
  let fixture: ComponentFixture<PvidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
