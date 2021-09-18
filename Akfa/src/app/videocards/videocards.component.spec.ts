import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardsComponent } from './videocards.component';

describe('VideocardsComponent', () => {
  let component: VideocardsComponent;
  let fixture: ComponentFixture<VideocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
