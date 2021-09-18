
import { UserToGetDto } from './../../_interfaces/user/userToGetDto.model';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { RegistrationResponseDto } from './../../_interfaces/response/registrationResponseDto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { UserForAuthenticationDto } from 'src/app/_interfaces/user/userForAuthenticationDto.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { UserPostDto } from 'src/app/_interfaces/user/userPostDto.model';
import { PostingResponseDto } from 'src/app/_interfaces/response/PostingResponseDto.model';
import { User } from 'src/app/Models/User';
import { Facility } from 'src/app/Models/facility';
/* const httpOptions ={
  headers : new HttpHeaders({
    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user')).token
  })}
 */
@Injectable({
  providedIn: 'root'
})
export class MrcService {
constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService)
{}
private createCompleteRoute = (route: string, envAddress: string) => {
  return `${envAddress}/${route}`;
}
  getMrcs(): Observable<any> {

    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/allmrcs'  );
  }
  getMrc(name : string){

    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/mrc/' + name  );
  }

}
