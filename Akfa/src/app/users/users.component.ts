import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { interval } from 'rxjs';
import { User } from '../Models/User';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  source = interval(777);
  subscription = this.source.subscribe(val => this.loadUsers());
  users: User [];
  value = '';
  constructor(private searchService: NbSearchService, private facilityService : UserService, private _authService : AuthenticationService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;})
   }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadUsers(){
     this._authService.getUsers().subscribe(users =>{
      /* this.facilities = Facility; */
      this.users = users;
      /* console.log(this.facilities); */

    });
    /* console.log(this.facilities); */


  }
}
