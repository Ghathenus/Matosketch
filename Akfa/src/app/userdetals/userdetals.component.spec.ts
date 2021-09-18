import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetalsComponent } from './userdetals.component';

describe('UserdetalsComponent', () => {
  let component: UserdetalsComponent;
  let fixture: ComponentFixture<UserdetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
