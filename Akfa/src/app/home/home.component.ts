import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbSidebarService, NbActionComponent, NbComponentSize } from '@nebular/theme';
import { User } from '../Models/User';
import { AccountService } from '../services/account.service';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `],
  styleUrls: ['./home.component.css'],
  template: `

  <nb-layout>
    <nb-layout-header fixed>Company Name</nb-layout-header>

    <nb-sidebar><app-lists></app-lists></nb-sidebar>

    <nb-layout-column>
      Page Content <button nbButton>StreamPixel</button>
    </nb-layout-column>
  </nb-layout>
`
})


export class HomeComponent implements OnInit {
  public isUserAuthenticated: boolean;
  acc : string;
  users: any;
  loggedIn : boolean;
  registerMode= false;
  markets : any;



  constructor(private http: HttpClient,private sidebarService: NbSidebarService, private _authService : AuthenticationService,private accountService : AccountService) { }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  ngOnInit(): void {
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
      console.log(this.isUserAuthenticated);
    })
    this.setCurrentUser();
    this.getMarkets();
  }
registerToggle(){
  this.registerMode = !this.registerMode;
}
setCurrentUser(){
  const user: User = JSON.parse(localStorage.getItem('user')|| '{}');
  this.accountService.setCurrentUser(user);
}
getMarkets (){
  this.http.get('https://localhost:44352/api/MarketsResearch').subscribe(markets => this.markets = markets)
 }

 cancelRegisterMode(event: boolean){
   this.registerMode= event;
 }

}
