import { User } from 'src/app/Models/User';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Profile } from '../Models/profile';
import { Video } from '../Models/Video';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-pvid',
  templateUrl: './pvid.component.html',
  styleUrls: ['./pvid.component.scss']
})
export class PvidComponent implements OnInit {

  @Input() profile: User;
video : Video;

  constructor(private _authService : AuthenticationService) { }

  ngOnInit(): void {
    this.loadVideo();


  }
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }
  loadVideo(){
    this._authService.getVideo(this.profile.id).subscribe(video =>{
     /* this.facilities = Facility; */

     this.video = video;
     console.log(this.video);

   });



 }

}
