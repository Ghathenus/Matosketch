import { UserToGetDto } from './../../_interfaces/user/userToGetDto.model';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { RegistrationResponseDto } from './../../_interfaces/response/registrationResponseDto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { UserForAuthenticationDto } from 'src/app/_interfaces/user/userForAuthenticationDto.model';
import { ReplaySubject, Subject } from 'rxjs';
import { UserPostDto } from 'src/app/_interfaces/user/userPostDto.model';
import { PostingResponseDto } from 'src/app/_interfaces/response/PostingResponseDto.model';
import { User } from 'src/app/Models/User';

/* const httpOptions ={
  headers : new HttpHeaders({
    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user')).token
  })}
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService)
{}
  getUser(email : string)
  {
    return this._http.get<any>(this._envUrl.urlAddress + '/api/accounts/' + email);
  }

  getUserbyusername(uName : string)
  {
    return this._http.get<any>(this._envUrl.urlAddress + '/api/accounts/puser/' + uName);
  }
}
