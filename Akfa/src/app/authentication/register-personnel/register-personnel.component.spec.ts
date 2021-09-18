import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonnelComponent } from './register-personnel.component';

describe('RegisterPersonnelComponent', () => {
  let component: RegisterPersonnelComponent;
  let fixture: ComponentFixture<RegisterPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
