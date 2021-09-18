import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginessayComponent } from './loginessay.component';

describe('LoginessayComponent', () => {
  let component: LoginessayComponent;
  let fixture: ComponentFixture<LoginessayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginessayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginessayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
