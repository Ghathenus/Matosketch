import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacililistComponent } from './facililist.component';

describe('FacililistComponent', () => {
  let component: FacililistComponent;
  let fixture: ComponentFixture<FacililistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacililistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacililistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
