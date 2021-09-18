import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedproblemComponent } from './feedproblem.component';

describe('FeedproblemComponent', () => {
  let component: FeedproblemComponent;
  let fixture: ComponentFixture<FeedproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedproblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
