import { User } from './../Models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { Market } from '../Models/market';


/* const httpOptions ={
  headers : new HttpHeaders({
    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user')).token
  })
} */

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl  =  'https://localhost:5001/api/'
private currentUserSource = new ReplaySubject<User>(1);
currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }
  login(model : any)
  {
    return this.http.post(this.baseUrl + 'Accounts/login', model).pipe(
      map((response: any)  => {
         const user = response;
         if(user) {
           localStorage.setItem('user', JSON.stringify(user));
           this.currentUserSource.next(user);
         }
      })
    )
  }

  register(model : any)
  {
    return this.http.post(this.baseUrl + 'Account/register', model).pipe(
      map((market : any) => {
         if(market) {
           localStorage.setItem('market', JSON.stringify(market));
           this.currentUserSource.next(market);
         }
      })
    )
  }



setCurrentUser(user : User) {
  this.currentUserSource.next(user);
}


  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next === null;
  }
getUser(username : string){
  return this.http.get<User[]>(this.baseUrl + 'accounts' + username);

}

}
