import { UserForAuthenticationDto } from './../_interfaces/user/userForAuthenticationDto.model';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../Models/User';
import { UserService } from '../shared/services/user.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Profile } from '../Models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user : User;
useremail : string;
profile : User;

  constructor(private authenticationService:  AuthenticationService, private userService:  UserService, private accountService :AccountService) {

    this.authenticationService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadUser();
  }
loadUser(){
   this.useremail = localStorage.getItem('email');
  this.userService.getUser(this.useremail).subscribe(profile => {
    this.profile = profile;
    console.log(this.profile);
  })
  /* this.userService.getUser(this.user.Email).subscribe(profile =>{
    this.profile = profile;
    console.log(this.profile);
  }) */
}
}
