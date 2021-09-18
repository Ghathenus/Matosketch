import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Market } from './Models/market';
import { AccountService } from './services/account.service';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AuthenticationService } from './shared/services/authentication.service';
import { User } from './Models/User';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    :host nb-layout-header button:last-child {
      margin-left: auto;
    }
  `],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isUserAuthenticated: boolean;
  acc : string;
  title = 'Matoskotch';
  users: any;
  loggedIn : boolean;
  curuser : User;
  curr : string;
  user : User;
useremail : string;
private _returnUrl: string;


  constructor(private userService : UserService , private accountService : AccountService,private sidebarService: NbSidebarService, private _router: Router, private _authService: AuthenticationService,private route : ActivatedRoute) {}
  ngOnInit()  {
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
      this.loggedIn = true;
      console.log(this.loggedIn);
      this._returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/**';
    })
    /* this.setCurrentUser(); */
    /* this.getUser(); */
    this.loadUser();
 }

setCurrentUser(){
  const user: User = JSON.parse(localStorage.getItem('user')|| '{}');
  this._authService.setCurrentUser(user);
  console.log(user);
}
getUser(){
  this.curr = localStorage.getItem('email');
  this._authService.getUser(this.curr).subscribe(curuser =>{
    this.curuser = curuser;

  })
}

/* getCurrentUser(){
  this.accountService.currentUser$.subscribe(user =>{
    this.loggedIn = !!user;
  },error =>{
    console.log(error);
  })} */
addname(){
  this.acc = localStorage.getItem('email');
  console.log(this.acc);
}
logout(){
  this.loggedIn = false;
  console.log(this.loggedIn);
  localStorage.clear();
  this._router.navigate([this._returnUrl]);

}
loguserout(){


  this._authService.authChanged
  .subscribe(res => {
    this.isUserAuthenticated = false;
    this.loggedIn = false;
    console.log(this.loggedIn);

  })
}
toggleCompact() {
  this.sidebarService.toggle(true, 'left');
}
loadUser(){/*
  this.useremail = localStorage.getItem('email');
 this.userService.getUser(this.useremail).subscribe(profile => {
   this.user = profile;
   console.log(this.user);
 }) */
 /* this.userService.getUser(this.user.Email).subscribe(profile =>{
   this.profile = profile;
   console.log(this.profile);
 }) */
}
items: NbMenuItem[] = [
  {
    title: 'Profile',
    expanded: true,
    children: [
      {
        title: 'Change Password',
      },
      {
        title: 'Privacy Policy',
      },
      {
        title: 'Logout',
      },
    ],
  },
  {
    title: 'Market Research',
    children: [
      {
        title: 'List',
      },
      {
        title: 'Search for one',
      }
    ],
  },
  {
    title: 'Facilities',
    children: [
      {
        title: 'Map',
      },
      {
        title: 'List',
      },
      {
        title: 'Search for one',
      },
    ],
  },
  {
    title: 'Personnel',
    children: [
      {
        title: 'List of transaltors',
      },
      {
        title: 'List of note-takers',
      }
    ],
  },
]
}
