import { Video } from './../Models/Video';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videocards',
  templateUrl: './videocards.component.html',
  styleUrls: ['./videocards.component.scss']
})
export class VideocardsComponent implements OnInit {
  @Input () video: Video;
  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
