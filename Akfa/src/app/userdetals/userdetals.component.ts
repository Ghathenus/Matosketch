import { UserService } from './../shared/services/user.service';
import { User } from 'src/app/Models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Video } from '../Models/Video';

@Component({
  selector: 'app-userdetals',
  templateUrl: './userdetals.component.html',
  styleUrls: ['./userdetals.component.css']
})
export class UserdetalsComponent implements OnInit {

  user : User;
  video : Video;
  vid : Video;
  url : string;
  constructor(private userService : UserService, private route: ActivatedRoute, private _authService : AuthenticationService) { }

  ngOnInit(): void {
    this.loadUser();
    this.loadVideo();
  }
 loadVideo(){
    this.userService.getUserbyusername(this.route.snapshot.paramMap.get('uName')).subscribe(user =>{
      this.user = user;
      console.log(this.user.id);})
    this._authService.getVideo(this.user.id).subscribe(video =>{
     /* this.facilities = Facility; */

     this.video = video;
     console.log(this.video);
     console.log(this.video.url);
      this.url = video.url;

   });
  }


loadUser(){
  this.userService.getUserbyusername(this.route.snapshot.paramMap.get('uName')).subscribe(user =>{
    this.user = user;
  })
}

}
