import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacdetComponent } from './facdet.component';

describe('FacdetComponent', () => {
  let component: FacdetComponent;
  let fixture: ComponentFixture<FacdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
