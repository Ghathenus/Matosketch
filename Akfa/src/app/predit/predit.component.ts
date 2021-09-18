import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Profile } from '../Models/profile';
import { User } from '../Models/User';
import { AccountService } from '../services/account.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-predit',
  templateUrl: './predit.component.html',
  styleUrls: ['./predit.component.scss']
})
export class PreditComponent implements OnInit {

  user : User;
  useremail : string;
  profile : Profile;

    constructor(private authenticationService:  AuthenticationService, private toastr: ToastrService,private userService:  UserService, private accountService :AccountService) {

      this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
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
  updateUser(){
    console.log(this.profile);
    this.useremail = localStorage.getItem('email');
    this.authenticationService.updateUser(this.useremail).subscribe(() =>{
      this.toastr.success('profile updated succesfully');
      console.log(this.updateUser);
    })


  }
  public showMyMessage = false

showMessageSoon() {
  setTimeout(() => {
    this.showMyMessage = true
  }, 3000)
}
  }
